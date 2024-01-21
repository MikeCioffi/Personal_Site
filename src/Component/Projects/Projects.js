import React, { useEffect, useState } from "react"
import Project from "./Project"

export default function Projects() {
	const [allowScroll, setAllowScroll] = useState(true)

	const toggleScroll = () => {
		setAllowScroll((prevState) => !prevState)
	}

	useEffect(() => {
		!allowScroll && document.body.clientWidth > 500
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
				gif: require("../../../src/assets/rsvp2.gif"),
			},
			description: {
				intro: (
					<div>
						<p>Event RSVP application</p>
						<div className='flex justify-center flex-wrap md:flex-nowrap'>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-blue-light text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/react.png")}
									alt='react'
								/>
								<span className='  ml-2'>React</span>
							</button>{" "}
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-blue text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/css3.png")}
									alt='react'
								/>
								<span className='  ml-2'>CSS</span>
							</button>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-white text-green text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/node-js.png")}
									alt='react'
								/>
								<span className='  ml-2'>NodeJS</span>
							</button>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-green-dark text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/mongodb.png")}
									alt='react'
								/>
								<span className='  ml-2'>MongoDB</span>
							</button>
						</div>
					</div>
				),

				modal: (
					<>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							May 2022
						</time>
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
					</>
				),
			},
			links: {
				github: "https://github.com/MikeCioffi/RSVP-app",
				live: "https://rsvper.netlify.app/",
			},
		},

		{
			title: "Stork Swipe",
			image: {
				title: "Baby Name Matcher",
				src: require("../../../src/assets/stork.jpg"),
				gif: require("../../../src/assets/stork.gif"),
			},
			description: {
				intro: (
					<div>
						<p>Find your favorite baby name with your partner</p>
						<div className='flex justify-center'>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-blue-light text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/react.png")}
									alt='react'
								/>
								<span className='  ml-2'>React</span>
							</button>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-white text-green text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/node-js.png")}
									alt='react'
								/>
								<span className='  ml-2'>NodeJS</span>
							</button>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-green-dark text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/mongodb.png")}
									alt='react'
								/>
								<span className='  ml-2'>MongoDB</span>
							</button>
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-blue text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/tailwind.png")}
									alt='react'
								/>
								<span className='  ml-2'>Tailwind</span>
							</button>

						</div>
					</div>
				),
				modal: (
					<>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							December 2023
						</time>
						<p className='font-bold'>
							Like/Dislike your favorite names
						</p>
						<br></br>
						<h1 className='font-bold'>Features</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								Send invites to your partner and other family members to connect.
							</li>
							<li className='list-none lg:list-dic'>
								See your likes/dislikes all in one place!
							</li>
						</ul>
						<br></br>
						<h1 className='font-bold'>Lessons Learned</h1>
						<ul>
							<li className='list-none lg:list-dic'>
								First serverless application.
							</li>
							<li className='list-none lg:list-dic'>
								Utilizing netlify functions to connect NodeJS to MongoDB.
							</li>
						</ul>

						<br></br>
					</>
				),
			},

			links: {
				github: "https://github.com/MikeCioffi/Stork-Swipe",
				live: "https://storkswiper.netlify.app/",
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
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-blue-light text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/react.png")}
									alt='react'
								/>
								<span className='  ml-2'>React</span>
							</button>{" "}
							<button className='h-[25px] px-3 flex justify-center items-center cursor-default  bg-purple text-white text-sm font-medium rounded-full m-2'>
								<img
									width='15'
									height='15'
									src={require("../../assets/Icons/bootstrap.png")}
									alt='React'
								/>
								<span className='ml-2'>Bootstrap</span>
							</button>{" "}
						</div>
					</div>
				),

				modal: (
					<>
						<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
							July 2022
						</time>
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
					</>
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
