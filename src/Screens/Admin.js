import React, { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import slugify from 'slugify';
import ReactMarkdown from 'react-markdown';

export default function Admin() {
    const [view, setView] = useState('list'); // 'list', 'create', 'edit'
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const fetchedPosts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(fetchedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setError('Failed to fetch posts');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            console.log('Starting post submission...');
            const slug = slugify(title, { lower: true });
            const post = {
                title,
                content,
                slug,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            console.log('Post data:', post);

            if (editingId) {
                console.log('Updating existing post:', editingId);
                await updateDoc(doc(db, 'posts', editingId), post);
                console.log('Post updated successfully');
            } else {
                console.log('Creating new post...');
                const docRef = await addDoc(collection(db, 'posts'), post);
                console.log('Post created successfully with ID:', docRef.id);
            }

            setTitle('');
            setContent('');
            setEditingId(null);
            setView('list');
            await fetchPosts();
            console.log('Operation completed successfully');
        } catch (error) {
            console.error('Error details:', error);
            setError(`Failed to save post: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await deleteDoc(doc(db, 'posts', postId));
                fetchPosts();
            } catch (error) {
                console.error('Error deleting post:', error);
                setError('Failed to delete post');
            }
        }
    };

    const handleEdit = (post) => {
        setTitle(post.title);
        setContent(post.content);
        setEditingId(post.id);
        setView('edit');
    };

    return (
        <div className="min-h-screen bg-theme-primary-1 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {view === 'list' ? (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">All Posts</h2>
                            <button
                                onClick={() => setView('create')}
                                className="bg-blue hover:bg-blue-light text-white px-4 py-2 rounded-lg"
                            >
                                Create New Post
                            </button>
                        </div>
                        {posts.map(post => (
                            <div key={post.id} className="bg-theme-primary-2 p-6 rounded-lg">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                                        <p className="text-gray-400 text-sm">
                                            {new Date(post.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(post)}
                                            className="bg-blue hover:bg-blue-light text-white px-3 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Post Title"
                                className="w-full p-4 rounded-lg bg-theme-primary-2 text-white border border-blue focus:ring-2 focus:ring-blue"
                                required
                            />
                        </div>

                        {/* Markdown Guide */}
                        <div className="bg-theme-primary-2 p-4 rounded-lg">
                            <h3 className="text-white font-medium mb-2">Markdown Guide:</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="space-y-1 text-gray-300">
                                    <p>## Heading 2</p>
                                    <p>### Heading 3</p>
                                    <p>**bold text**</p>
                                    <p>*italic text*</p>
                                </div>
                                <div className="space-y-1 text-gray-300">
                                    <p>- Bullet point</p>
                                    <p>1. Numbered list</p>
                                    <p>```code block```</p>
                                    <p>[Link Text](URL)</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Editor */}
                            <div className="space-y-2">
                                <label className="block text-white text-sm font-medium">
                                    Editor
                                </label>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Write your post content here... (Markdown supported)"
                                    rows={20}
                                    className="w-full p-4 rounded-lg bg-theme-primary-2 text-white border border-blue focus:ring-2 focus:ring-blue font-mono text-sm"
                                    required
                                />
                            </div>

                            {/* Preview */}
                            <div className="space-y-2">
                                <label className="block text-white text-sm font-medium">
                                    Preview
                                </label>
                                <div className="w-full h-[calc(100%-28px)] overflow-auto p-4 rounded-lg bg-theme-primary-2 border border-blue">
                                    <div className="prose prose-invert prose-sm max-w-none">
                                        <ReactMarkdown>{content}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-blue hover:bg-blue-light text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50"
                            >
                                {isSubmitting ? 'Publishing...' : (editingId ? 'Update Post' : 'Publish Post')}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setView('list');
                                    setTitle('');
                                    setContent('');
                                    setEditingId(null);
                                }}
                                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
} 