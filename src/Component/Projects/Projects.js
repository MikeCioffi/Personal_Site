import React, { useEffect, useState } from "react"
import Project from "./Project"

export default function Projects() {
	const [allowScroll, setAllowScroll] = useState(true)

	const toggleScroll = () => {
		setAllowScroll((prevState) => !prevState)
	}

	useEffect(() => {
		!allowScroll
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto")
	}, [allowScroll])
	console.log(allowScroll)
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
						<p className='font-bold'>
							MERN stack application to provide a simple way RSVP to your next
							event!
						</p>
						<br></br>
						<h1 className='font-bold'>Features</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								Ability to select and save your menu choice to the event
							</li>
							<li className='list-none lg:list-dic'>
								Ability to create and delete familys
							</li>
							<li className='list-none lg:list-dic'>
								Dashboard to showcase totals at a glance
							</li>
						</ul>
						<br></br>
						<h1 className='font-bold'>Lessons Learned</h1>
						<ul>
							<li className='list-none lg:list-dic'></li>
							<li className='list-none lg:list-dic'>
								Ability to maintain family list with create and delete
							</li>
							<li className='list-none lg:list-dic'>
								Dashboard to showcase totals at a glance
							</li>
						</ul>
						<br></br>
						<h1>
							<span className='font-bold'>Please Note: </span>Heroku hibernation
							causes first call will take a few additional seconds
						</h1>

						<br></br>
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
					<div className='text-theme-primary-2 leading-relaxed'>
						<p className='font-bold'>
							Pull your 10 latest games with League Tracker
						</p>
						<br></br>
						<h1 className='font-bold'>Features</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								Connects to RIOT's Api to pull individual match data
							</li>
							<li className='list-none lg:list-dic'>
								Utilizes ChartJS to display summary data
							</li>
						</ul>
						<br></br>
						<h1 className='font-bold'>Lessons Learned</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								Utilizing AWS API Gateway to alleviate CORS issue
							</li>
							<li className='list-none lg:list-dic'>
								Lazy loading images for performance improvements
							</li>
							<li className='list-none lg:list-dic'>
								Dashboard to showcase totals at a glance
							</li>
						</ul>

						<br></br>
					</div>
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
								width='50'
								height='50'
								src={require("../../assets/Icons/bootstrap.png")}
								alt='css'
							/>
						</div>
					</div>
				),

				modal: (
					<div className='text-theme-primary-2 leading-relaxed'>
						<p className='font-bold'>Time Entry Helper</p>
						<br></br>
						<h1 className='font-bold'>Features</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								Pulls google calendar events for user selected dates
							</li>
							<li className='list-none lg:list-dic'>
								Allows user to set their own tags per event
							</li>
							<li className='list-none lg:list-dic'>
								Allows the user to export to CSV to upload to their time
								tracking system
							</li>
						</ul>
						<br></br>
						<h1 className='font-bold'>Lessons Learned</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								Utilizing the user and calendar Google API
							</li>
							<li className='list-none lg:list-dic'>
								Tranforming API data per the user inputs
							</li>
							<li className='list-none lg:list-dic'>
								Leveraging react-csv to export modified data
							</li>
						</ul>

						<br></br>
					</div>
				),
			},
			links: {
				github: "https://github.com/MikeCioffi/Google_Calendar_Exporter",
				live: "https://googlecalexporter.netlify.app/",
			},
		},
	]
	return (
		<div
			className={
				allowScroll
					? "bg-theme-primary-2 v-screen"
					: "bg-theme-primary-2 v-screen overflow-hidden"
			}
		>
			<h1 className='text-center text-5xl  text-white md:text-5xl  pt-14 pb-2'>
				{" "}
				PROJECTS{" "}
			</h1>
			<div
				className={
					allowScroll
						? "flex flex-col lg:flex-row "
						: "flex flex-col lg:flex-row overflow-hidden"
				}
			>
				{projects.map((project, index) => (
					<Project
						toggleScroll={toggleScroll}
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
