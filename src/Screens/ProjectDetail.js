import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../Component/Navbar/Navbar"

export default function ProjectDetail() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-theme-primary-1">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    {/* Back Button */}
                    <Link
                        to="/projects"
                        className="text-blue hover:text-blue-light inline-flex items-center mb-8"
                    >
                        ← Back to projects
                    </Link>

                    {/* Project Header */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <h1 className="text-4xl font-bold text-white">Project Title</h1>
                            <div className="flex gap-4">
                                <a
                                    href="#live-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue hover:bg-blue-light transition-colors text-white font-medium"
                                >
                                    <span>Live Demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a
                                    href="#github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue text-blue hover:bg-blue/10 transition-colors font-medium"
                                >
                                    <span>View Code</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["React", "Firebase", "Tailwind CSS"].map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm font-medium text-blue-light bg-blue/10 rounded-full"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project Image */}
                        <div className="rounded-xl overflow-hidden mb-12">
                            <img
                                src="project-image.jpg"
                                alt="Project Screenshot"
                                className="w-full"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h2>About the Project</h2>
                            <p>Detailed project description...</p>

                            <h2>Features</h2>
                            <ul>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>

                            <h2>Technical Details</h2>
                            <p>Technical implementation details...</p>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
} 