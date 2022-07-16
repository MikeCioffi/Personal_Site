import React, { useState } from "react"
import Project from "./Project"

export default function Projects() {
	const projects = [
		{
			title: "RSVP App",
			image: {
				title: "Wedding RSVP App",
				src: require("../../../src/assets/RSVP_Color2.jpg"),
				gif: require("../../../src/assets/rsvp.gif"),
			},
			description: {
				intro: (
					<div>
						<p>Event RSVP application</p>
						<div className='flex justify-center'>
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/react.png")}
								alt='react'
							/>{" "}
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/css3.png")}
								alt='css'
							/>{" "}
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/node-js.png")}
								alt=''
							/>
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/mongodb.png")}
								alt=''
							/>
						</div>
					</div>
				),

				modal: (
					<div className='text-theme-primary-2 leading-relaxed'>
						<h1>Challenges</h1>
						<p> challenges were...</p>
					</div>
				),
			},
			links: {
				github: "https://github.com/MikeCioffi/RSVP-app",
				live: "https://rsvper.netlify.app/",
			},
		},

		{
			title: "Match History",
			image: {
				title: "League Match History Preview",
				src: require("../../../src/assets/League_Match.jpg"),
				gif: require("../../../src/assets/league.gif"),
			},
			description: {
				intro: (
					<div>
						<p>League of Legends match history tracker</p>
						<div className='flex justify-center'>
							<img
								width='50'
								height='50'
								src={require("../../assets/Icons/react.png")}
								alt='react'
							/>
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/css3.png")}
								alt='css'
							/>
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/aws.png")}
								alt=''
							/>
						</div>
					</div>
				),
				modal: (
					<div className='text-theme-primary-2 text-lg leading-relaxed'></div>
				),
			},

			links: {
				github: "https://github.com/MikeCioffi/League-Tracker",
				live: "https://matchhistory.netlify.app/",
			},
		},
		{
			title: "Calendar Exporter",
			image: {
				title: "Google Calendar Exporter",
				src: require("../../../src/assets/Report_Color1.jpg"),
				gif: require("../../../src/assets/google_cal.gif"),
			},
			description: {
				intro: (
					<div>
						{" "}
						<p>Google calendar exporter</p>
						<div className='flex justify-center'>
							<img
								width='50'
								height='50'
								src={require("../../assets/Icons/react.png")}
								alt='react'
							/>
							<img
								width='50px'
								height='50px'
								src={require("../../assets/Icons/css3.png")}
								alt='css'
							/>
						</div>
					</div>
				),

				modal: (
					<div className='text-theme-primary-2 text-lg leading-relaxed'></div>
				),
			},
			links: {
				github: "https://github.com/MikeCioffi/Google_Calendar_Exporter",
				live: "https://googlecalexporter.netlify.app/",
			},
		},
	]
	return (
		<div className='bg-theme-primary-2 v-screen'>
			<h1 className='text-center text-5xl  text-white md:text-5xl  pt-14 pb-2'>
				{" "}
				PROJECTS{" "}
			</h1>
			<div className='flex flex-col lg:flex-row '>
				{projects.map((project, index) => (
					<Project
						key={index}
						title={project.title}
						imageSrc={project.image.src}
						gif={project.image.gif}
						imageAlt={project.image.alt}
						liveLink={project.links.live}
						githubLink={project.links.github}
						modalDescription={project.description.modal}
						description={project.description.intro}
					/>
				))}
			</div>
		</div>
	)
}
