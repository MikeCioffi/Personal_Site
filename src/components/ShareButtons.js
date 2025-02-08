export default function ShareButtons({ title, url }) {
    const shareLinks = [
        {
            name: 'Twitter',
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            icon: 'twitter.svg'
        },
        {
            name: 'LinkedIn',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            icon: 'linkedin.svg'
        }
    ];

    return (
        <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-800">
            <span className="text-gray-300">Share this post:</span>
            <div className="flex gap-2">
                {shareLinks.map(link => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-light transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
} 