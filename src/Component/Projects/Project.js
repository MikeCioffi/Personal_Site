import React from "react"

export default function Project({ title, imageSrc, description, technologies, links }) {
	const getTechColor = (tech) => {
		const colors = {
			'React': 'bg-[#61DAFB]/10 text-[#61DAFB]',
			'CSS': 'bg-[#2965f1]/10 text-[#2965f1]',
			'NodeJS': 'bg-[#339933]/10 text-[#339933]',
			'MongoDB': 'bg-[#47A248]/10 text-[#47A248]',
			'Bootstrap': 'bg-[#7952B3]/10 text-[#7952B3]',
			'Tailwind': 'bg-[#38B2AC]/10 text-[#38B2AC]',
			'Firebase': 'bg-[#FFCA28]/10 text-[#FFCA28]',
			// Add more technologies as needed
		};
		return colors[tech] || 'bg-blue/10 text-blue-light'; // default color
	};

	return (
		<div className="h-full bg-theme-primary-2 rounded-xl overflow-hidden hover:translate-y-[-2px] transition-transform duration-200 relative">
			{/* Image Container */}
			<div className="relative h-48">
				<img
					src={imageSrc}
					alt={title}
					className="object-cover w-full h-full"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-theme-primary-2/30 to-transparent" />
			</div>

			{/* Content */}
			<div className="p-6 space-y-4 flex flex-col h-[calc(100%-192px)]">
				<h3 className="text-2xl font-bold text-white hover:text-blue-light transition-colors duration-200">
					{title}
				</h3>

				<div className="text-white/80 flex-grow">
					{description}
				</div>

				<div className="flex flex-wrap gap-2">
					{technologies.map((tech, index) => (
						<span
							key={index}
							className={`px-3 py-1 text-sm font-medium rounded-full ${getTechColor(tech)}`}
						>
							{tech}
						</span>
					))}
				</div>

				{/* Action Buttons - Added z-index */}
				<div className="flex gap-4 pt-4 z-10 relative">
					<a
						href={links.live}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-blue rounded-lg 
						hover:bg-blue-light transition-colors duration-200"
					>
						Live Demo
					</a>
					<a
						href={links.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 px-4 py-2 text-center text-sm font-medium border border-blue text-blue rounded-lg 
						hover:bg-blue/10 transition-colors duration-200"
					>
						View Code
					</a>
				</div>
			</div>
		</div>
	);
}
