import React, { useState, useEffect } from 'react';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
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
            const slug = slugify(title, { lower: true });
            const post = {
                title,
                content,
                slug,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            if (editingId) {
                await updateDoc(doc(db, 'posts', editingId), post);
            } else {
                await addDoc(collection(db, 'posts'), post);
            }

            setTitle('');
            setContent('');
            setEditingId(null);
            setView('list');
            await fetchPosts();
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
                                        <p className="text-white text-sm">
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
                                <div className="space-y-1 text-white">
                                    <p>## Heading 2</p>
                                    <p>### Heading 3</p>
                                    <p>**bold text**</p>
                                    <p>*italic text*</p>
                                </div>
                                <div className="space-y-1 text-white">
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
                                    <ReactMarkdown
                                        components={{
                                            table: ({ node, ...props }) => (
                                                <table className="min-w-full divide-y divide-gray-700 my-8 text-white" {...props} />
                                            ),
                                            thead: ({ node, ...props }) => (
                                                <thead className="bg-theme-primary-2 text-white" {...props} />
                                            ),
                                            tbody: ({ node, ...props }) => (
                                                <tbody className="divide-y divide-gray-700 text-white" {...props} />
                                            ),
                                            tr: ({ node, ...props }) => (
                                                <tr className="hover:bg-theme-primary-2/50 transition-colors" {...props} />
                                            ),
                                            th: ({ node, ...props }) => (
                                                <th className="px-6 py-3 text-left text-sm font-semibold text-white" {...props} />
                                            ),
                                            td: ({ node, ...props }) => (
                                                <td className="px-6 py-4 text-sm whitespace-nowrap text-white" {...props} />
                                            ),
                                            h1: ({ node, children, ...props }) => (
                                                <h1 className="text-5xl font-bold text-white mb-4" {...props}>
                                                    {children}
                                                </h1>
                                            ),
                                            h2: ({ node, children, ...props }) => {
                                                const text = children?.toString().trim() || "Heading";
                                                return (
                                                    <h2
                                                        id={text.toLowerCase().replace(/\s+/g, '-')}
                                                        className="text-3xl font-bold mt-12 mb-6 text-white"
                                                        {...props}
                                                    >
                                                        {children}
                                                    </h2>
                                                );
                                            },
                                            h3: ({ node, children, ...props }) => {
                                                const text = children?.toString().trim() || "Heading";
                                                return (
                                                    <h3
                                                        id={text.toLowerCase().replace(/\s+/g, '-')}
                                                        className="text-2xl font-bold mt-8 mb-4 text-white"
                                                        {...props}
                                                    >
                                                        {children}
                                                    </h3>
                                                );
                                            },
                                            p: ({ node, ...props }) => (
                                                <p className="text-white leading-relaxed mb-6" {...props} />
                                            ),
                                            ul: ({ node, ...props }) => (
                                                <ul className="list-disc list-inside mb-6 text-white" {...props} />
                                            ),
                                            ol: ({ node, ...props }) => (
                                                <ol className="list-decimal list-inside mb-6 text-white" {...props} />
                                            ),
                                            li: ({ node, ...props }) => (
                                                <li className="mb-2 text-white" {...props} />
                                            ),
                                            a: ({ node, children, ...props }) => (
                                                <a className="text-blue-300 hover:text-blue-400 underline" {...props}>
                                                    {children || props.href}
                                                </a>
                                            ),
                                            blockquote: ({ node, ...props }) => (
                                                <blockquote className="border-l-4 border-blue pl-4 italic my-6 text-white" {...props} />
                                            ),
                                            code: ({ node, inline, ...props }) =>
                                                inline ? (
                                                    <code className="bg-theme-primary-2 text-white px-1 py-0.5 rounded" {...props} />
                                                ) : (
                                                    <code className="block bg-theme-primary-2 p-4 rounded-lg overflow-x-auto mb-6 text-white" {...props} />
                                                ),
                                            pre: ({ node, ...props }) => (
                                                <pre className="bg-transparent text-white" {...props} />
                                            ),
                                        }}
                                    >
                                        {content}
                                    </ReactMarkdown>
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