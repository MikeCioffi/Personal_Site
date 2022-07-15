import React from "react"
import Project from "./Project"

export default function Projects() {
	const projects = [
		{
			title: "RSVP App",
			image: {
				title: "Wedding RSVP App",
				src: require("../../../src/assets/rsvp.png"),
				gif: require("../../../src/assets/rsvp.gif"),
			},
			description: {
				intro:
					"Full stack Wedding RSVP application built with React, Node.js, Express.js, MongoDB",
				modal:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			},
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
			title: "Match History",
			image: {
				title: "League Match History Preview",
				src: require("../../../src/assets/leaguel.png"),
				gif: require("../../../src/assets/league.gif"),
			},
			description: {
				intro: "Front end application built with React and AWS Api Gateway",
				modal:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			},

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
		{
			title: "Calendar Exporter",
			image: {
				title: "Google Calendar Exporter",
				src: require("../../../src/assets/google_cal.png"),
				gif: require("../../../src/assets/google_cal.gif"),
			},
			description: {
				intro:
					"Front end application built with React using GoogleAPI and Bootstrap",
				modal:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			},
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
	]
	return (
		<div class='bg-theme-primary-2 v-screen'>
			<h1 className='text-center text-5xl  text-white md:text-5xl  pt-14 pb-2'>
				{" "}
				PROJECTS{" "}
			</h1>
			<div class='flex flex-col lg:flex-row '>
				{projects.map((project, index) => (
					<Project
						key={index}
						title={project.title}
						imageSrc={project.image.src}
						gif={project.image.gif}
						imageAlt={project.image.alt}
						liveLink={project.links.live}
						githubLink={project.links.github}
						requirements={project.accordion.requirements}
						challenges={project.accordion.challenges}
						techstack={project.accordion.techstack}
						modalDescription={project.description.modal}
						description={project.description.intro}
					/>
				))}
			</div>
		</div>
	)
}
