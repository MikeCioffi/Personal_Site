import React, { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import ReactMarkdown from 'react-markdown';
import { calculateReadingTime } from '../utils/readingTime';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const fetchedPosts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPosts(fetchedPosts);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Failed to load posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center">
                    <div className="text-white text-xl">Loading posts...</div>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center">
                    <div className="text-red-500">{error}</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-theme-primary-1 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-12">Blog</h1>
                    {posts.length === 0 ? (
                        <div className="text-center text-white py-10">
                            <p className="text-xl mb-4">No posts yet!</p>
                            <Link
                                to="/admin"
                                className="text-blue hover:text-blue-light underline"
                            >
                                Create your first post
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {posts.map(post => (
                                <article
                                    key={post.id}
                                    className="group bg-theme-primary-2 p-8 rounded-xl transition-all duration-300 border border-white/10
                                              hover:border-blue/20 hover:shadow-lg hover:shadow-blue/5 hover:-translate-y-1"
                                >
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <h2 className="text-3xl font-bold text-white group-hover:text-blue transition-colors duration-300 mb-3">
                                            {post.title}
                                        </h2>
                                        <div className="flex items-center gap-2 text-sm mb-4">
                                            <time className="text-blue-light font-medium">
                                                {new Date(post.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                            <span className="text-white/50">•</span>
                                            <span className="text-blue-light font-medium">{calculateReadingTime(post.content)} min read</span>
                                        </div>
                                        <div className="prose prose-invert prose-sm max-w-none line-clamp-3 text-white/70 group-hover:text-white/90 transition-colors duration-300">
                                            <ReactMarkdown>
                                                {post.content.substring(0, 300)}
                                            </ReactMarkdown>
                                        </div>
                                        <div className="mt-4 text-blue group-hover:text-blue-light text-sm font-medium transition-colors duration-300 flex items-center">
                                            Read more
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
} 