import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Project from "../Component/Projects/Project";

export default function ProjectsPage() {
    const projects = [
        {
            title: "RSVP App",
            technologies: ["React", "CSS", "NodeJS", "MongoDB"],
            imageSrc: require("../assets/RSVP_Color2.jpg"),
            description: "Event RSVP application with menu selection and family management capabilities.",
            links: {
                github: "https://github.com/MikeCioffi/RSVP-app",
                live: "https://rsvper.netlify.app/",
            }
        },
        {
            title: "Stork Swipe",
            technologies: ["React", "NodeJS", "MongoDB", "Tailwind"],
            imageSrc: require("../assets/stork.jpg"),
            description: "Find your favorite baby name with your partner",
            links: {
                github: "https://github.com/MikeCioffi/Stork-Swipe",
                live: "https://storkswiper.netlify.app/",
            }
        },
        {
            title: "Calendar Exporter",
            technologies: ["React", "Bootstrap"],
            imageSrc: require("../assets/Report_Color1.jpg"),
            description: "Google calendar exporter for time tracking",
            links: {
                github: "https://github.com/MikeCioffi/Google_Calendar_Exporter",
                live: "https://googlecalexporter.netlify.app/",
            }
        }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-theme-primary-1 pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold text-white text-center mb-12">
                        Projects
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Project
                                key={project.title}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
} 