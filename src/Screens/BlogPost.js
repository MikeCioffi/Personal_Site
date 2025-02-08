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

                        <div className="prose prose-lg max-w-none">
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