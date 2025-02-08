import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import ReactMarkdown from 'react-markdown';
import Navbar from '../Component/Navbar/Navbar';
import TableOfContents from '../components/TableOfContents';
import ShareButtons from '../components/ShareButtons';
import { calculateReadingTime } from '../utils/readingTime';

export default function BlogPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            const q = query(collection(db, 'posts'), where('slug', '==', slug));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setPost({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
            }
            setLoading(false);
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center">
                    <div className="text-white text-xl">Loading...</div>
                </div>
            </>
        );
    }

    if (!post) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center">
                    <div className="text-white text-xl">Post not found</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-theme-primary-1">
                <div className="max-w-6xl mx-auto px-4 py-12 flex gap-8">
                    {/* Fixed TOC sidebar */}
                    <aside className="w-64 flex-shrink-0 hidden lg:block">
                        <div className="sticky top-8">
                            <TableOfContents
                                content={post.content}
                                backButton={
                                    <Link
                                        to="/blog"
                                        className="text-blue hover:text-blue-light inline-flex items-center mb-8"
                                    >
                                        ← Back to all posts
                                    </Link>
                                }
                            />
                        </div>
                    </aside>

                    {/* Main content */}
                    <article className="max-w-4xl flex-grow">
                        <header className="mb-12">
                            <h1 className="text-5xl font-bold text-white mb-4">{post.title}</h1>
                            <div className="flex items-center gap-2 text-blue-light">
                                <time className="text-lg">
                                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                                <span className="text-gray-400">•</span>
                                <span className="text-lg">{calculateReadingTime(post.content)} min read</span>
                            </div>
                        </header>

                        <div className="prose prose-invert prose-lg max-w-none">
                            <ReactMarkdown
                                components={{
                                    table: ({ node, ...props }) => (
                                        <table className="min-w-full divide-y divide-gray-700 my-8" {...props} />
                                    ),
                                    thead: ({ node, ...props }) => (
                                        <thead className="bg-theme-primary-2" {...props} />
                                    ),
                                    tbody: ({ node, ...props }) => (
                                        <tbody className="divide-y divide-gray-700" {...props} />
                                    ),
                                    tr: ({ node, ...props }) => (
                                        <tr className="hover:bg-theme-primary-2/50 transition-colors" {...props} />
                                    ),
                                    th: ({ node, ...props }) => (
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-blue-light" {...props} />
                                    ),
                                    td: ({ node, ...props }) => (
                                        <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap" {...props} />
                                    ),
                                    h2: ({ node, ...props }) => (
                                        <h2
                                            id={props.children.toString().toLowerCase().replace(/\s+/g, '-')}
                                            className="text-3xl font-bold text-white mt-12 mb-6"
                                            {...props}
                                        />
                                    ),
                                    h3: ({ node, ...props }) => (
                                        <h3
                                            id={props.children.toString().toLowerCase().replace(/\s+/g, '-')}
                                            className="text-2xl font-bold text-white mt-8 mb-4"
                                            {...props}
                                        />
                                    ),
                                    p: ({ node, ...props }) => <p className="text-gray-300 leading-relaxed mb-6" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc list-inside text-gray-300 mb-6" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-gray-300 mb-6" {...props} />,
                                    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                                    a: ({ node, ...props }) => <a className="text-blue hover:text-blue-light underline" {...props} />,
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote
                                            className="border-l-4 border-blue pl-4 italic text-gray-400 my-6"
                                            {...props}
                                        />
                                    ),
                                    code: ({ node, inline, ...props }) => (
                                        inline
                                            ? <code className="bg-theme-primary-2 text-blue px-1 py-0.5 rounded" {...props} />
                                            : <code className="block bg-theme-primary-2 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
                                    ),
                                    pre: ({ node, ...props }) => <pre className="bg-transparent" {...props} />,
                                }}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        <ShareButtons
                            title={post.title}
                            url={window.location.href}
                        />
                    </article>
                </div>
            </div>
        </>
    );
} 