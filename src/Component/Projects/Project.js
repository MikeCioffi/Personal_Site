import React, { useState } from "react"
import Accordion from "../Accordion/Accordion"
import Modal from "../Modal/Modal"

export default function Project(props) {
	const [showModal, setShowModal] = useState(false)

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<div
			id='Project'
			className='flex flex-wrap   justify-center px-2 text-center py-3 bg-theme-primary-2 text-white flex-col lg:flex-row   lg:w-1/3 py-40'
		>
			<div className='flex justify-center items-center flex-col'>
				<h3 className='text-center text-white sm:text-4xl lg:text-5xl lg:text-1xl'>
					{props.title}
				</h3>
				<br></br>
				<img
					class='shadow-inner rounded-lg 	lg:h-96 '
					src={props.imageSrc}
					alt={props.imageAlt}
					at
				/>
				<p class='text-white'> {props.description} </p>

				<Modal
					gif={props.gif}
					title={props.title}
					showModal={showModal}
					closeModal={closeModal}
					githubLink={props.githubLink}
					modalDescription={props.modalDescription}
					liveLink={props.liveLink}
				/>
				{/* <Accordion
		challenges={props.challenges}
		requirements={props.requirements}
		techstack={props.techstack}
	/> */}

				<div class='flex justify-center'>
					<button
						onClick={() => setShowModal(true)}
						type='button'
						class='text-white w-full border-blue border-2 focus:ring-4 focus:outline-none focus:ring-cyan-300
	dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2 hover:bg-blue'
					>
						Learn More
					</button>
				</div>

				<div className=''></div>
			</div>
		</div>
	)
}
