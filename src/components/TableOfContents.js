import React, { useState, useEffect } from 'react';

export default function TableOfContents({ content, backButton }) {
    const [activeId, setActiveId] = useState('');
    const headings = content.match(/#{2,3}\s+(.+)/g) || [];
    const toc = headings.map(heading => ({
        level: heading.match(/#{2,3}/)[0].length,
        text: heading.replace(/#{2,3}\s+/, ''),
        id: heading.replace(/#{2,3}\s+/, '').toLowerCase().replace(/\s+/g, '-')
    }));

    useEffect(() => {
        if (toc.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-80px 0px -80% 0px'
            }
        );

        toc.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            toc.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
    }, [toc]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (!element) return;

        const navbarHeight = 80; // Height of your navbar
        const extraPadding = 24; // Additional padding for better visibility
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraPadding;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    if (toc.length === 0) return null;

    return (
        <nav className="h-[calc(100vh-80px)] sticky top-20 overflow-auto pr-8">
            {backButton}
            <div className="border-l border-gray-800/50 h-full py-8">
                <h2 className="text-lg font-bold text-white mb-6 pl-6">On this page</h2>
                <div className="space-y-3">
                    {toc.map((heading, index) => (
                        <a
                            key={index}
                            href={`#${heading.id}`}
                            onClick={(e) => scrollToSection(e, heading.id)}
                            className={`
                                block pl-6 py-1 -ml-px border-l-2 transition-all duration-200
                                ${heading.level === 2 ? 'text-sm' : 'text-sm pl-10'}
                                ${activeId === heading.id
                                    ? 'text-blue-light border-blue-light font-medium'
                                    : 'text-white hover:text-blue-light border-transparent hover:border-blue-light/50'
                                }
                            `}
                        >
                            {heading.text}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
} 