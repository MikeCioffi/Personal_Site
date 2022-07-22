import React from "react"
import "./intro.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-scroll"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
export default function Intro() {
	return (
		<div
			id='Intro'
			className='-mt-24 flex flex-col flex-wrap items-center justify-center px-2 text-center py-3 bg-theme-primary-1 h-screen text-slate-50'
		>
			<h1 className='text-white text-center text-5xl md:text-5xl lg:text-8xl -mt-24'>
				{" "}
				Hi, I'm <span className='text-blue'>Mike</span>!
			</h1>
			<span className='text-white text-center text-3xl'>
				Front End Developer{" "}
			</span>

			<div className='flex'>
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
						alt='linkedin'
					></img>
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
						alt='linkedin'
					></img>{" "}
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
						alt='linkedin'
					></img>
				</a>
			</div>
			<Link
				duration={300}
				className='cursor-pointer'
				to='Project'
				smooth={true}
			>
				<div className='animate-bounce mt-12'>
					<FontAwesomeIcon className='text-5xl text-blue' icon={faArrowDown} />
				</div>
			</Link>
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
