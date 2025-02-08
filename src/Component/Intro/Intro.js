import React from "react"
import "./intro.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link as ScrollLink } from "react-scroll"
import { Link as RouterLink } from "react-router-dom"
import { faArrowDown, faPenFancy, faProjectDiagram } from "@fortawesome/free-solid-svg-icons"

export default function Intro() {
	return (
		<div
			id='Intro'
			className='flex flex-col items-center justify-center h-screen text-white'
			style={{ background: "linear-gradient(135deg, #0284c7, #06b6d4)" }}
		>
			<h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>
				👋 Hey there, I'm <span className='text-black'>Mike</span>
			</h1>
			<div className='mt-4 space-y-2 text-lg'>
				<p>Turning ideas into polished products</p>
				<p>and sharing insights from the journey.</p>
			</div>

			<div className='flex mt-6 space-x-4'>
				<a
					href='https://www.linkedin.com/in/michaelcioffi95/'
					target='blank'
					rel='noopener noreferrer'
				>
					<img
						className='logo-blue'
						src={require("../../assets/Icons/linkedin.png")}
						width='35px'
						height='35px'
						alt='LinkedIn'
					/>
				</a>
				<a
					href='https://github.com/MikeCioffi/'
					target='blank'
					rel='noopener noreferrer'
				>
					<img
						className='logo-blue'
						src={require("../../assets/Icons/github.png")}
						width='35px'
						height='35px'
						alt='GitHub'
					/>
				</a>
				<a
					href="mailto:mike.cioffi95@gmail.com?Subject=Hi! I'm reaching out from your website."
					target='blank'
					rel='noopener noreferrer'
				>
					<img
						className='logo-blue'
						src={require("../../assets/Icons/email.png")}
						width='35px'
						height='35px'
						alt='Email'
					/>
				</a>
			</div>

			<div className='flex gap-6 mt-12'>
				<RouterLink
					to='/blog'
					className='bg-blue hover:bg-blue-light text-white py-2 px-4 rounded-lg flex items-center transition-transform transform hover:scale-105'
				>
					<FontAwesomeIcon icon={faPenFancy} className='mr-2' />
					Read Latest Blog
				</RouterLink>
				<RouterLink
					to='/projects'
					className='bg-theme-secondary-1 hover:opacity-90 text-white py-2 px-4 rounded-lg flex items-center transition-transform transform hover:scale-105'
				>
					<FontAwesomeIcon icon={faProjectDiagram} className='mr-2' />
					View Projects
				</RouterLink>
			</div>

			<ScrollLink
				duration={300}
				className='cursor-pointer mt-12'
				to='next-section'
				smooth={true}
			>
				<div className='animate-bounce'>
					<FontAwesomeIcon className='text-5xl' icon={faArrowDown} />
				</div>
			</ScrollLink>

			<div className='custom-shape-divider-bottom-1657904637'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
				>
					<path
						d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
						opacity='.25'
						className='shape-fill'
					></path>
					<path
						d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
						opacity='.5'
						className='shape-fill'
					></path>
					<path
						d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
						className='shape-fill'
					></path>
				</svg>
			</div>
		</div>
	)
}
