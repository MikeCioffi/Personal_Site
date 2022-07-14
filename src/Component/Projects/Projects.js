import React from "react"
import Project from "./Project"

export default function Projects() {
	const projects = [
		{
			title: "RSVP App",
			image: {
				title: "Wedding RSVP App",
				src: require("../../../src/assets/rsvp.gif"),
			},
			description:
				"Full stack Wedding RSVP application built with React, Node.js, Express.js, MongoDB",
			links: {
				github: "https://github.com/MikeCioffi/RSVP-app",
				live: "https://rsvper.netlify.app/",
			},
			accordion: {
				requirements: "initial requirements",
				challenges: "Challenges in this app",
				techstack: "techstack",
			},
		},
		{
			title: "Calendar Exporter",
			image: {
				title: "Google Calendar Exporter",
				src: require("../../../src/assets/google_cal.gif"),
			},
			description:
				"Front end application built with React using GoogleAPI and Bootstrap",
			links: {
				github: "https://github.com/MikeCioffi/Google_Calendar_Exporter",
				live: "https://googlecalexporter.netlify.app/",
			},
			accordion: {
				requirements: "initial requirements",
				challenges: "Challenges in this app",
				techstack: "techstack",
			},
		},
		{
			title: "Match History",
			image: {
				title: "League Match History Preview",
				src: require("../../../src/assets/league.gif"),
			},
			description: "Front end application built with React and AWS Api Gateway",
			links: {
				github: "https://github.com/MikeCioffi/League-Tracker",
				live: "https://matchhistory.netlify.app/",
			},
			accordion: {
				requirements: "initial requirements",
				challenges: "Challenges in this app",
				techstack: "techstack",
			},
		},
	]
	return (
		<div>
			{projects.map((project, index) => {
				return (
					<Project
						key={index}
						title={project.title}
						imageSrc={project.image.src}
						imageAlt={project.image.alt}
						description={project.description}
						liveLink={project.links.live}
						githubLink={project.links.github}
						requirements={project.accordion.requirements}
						challenges={project.accordion.challenges}
						techstack={project.accordion.techstack}
					/>
				)
			})}
		</div>
	)
}
