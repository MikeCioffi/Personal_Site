import React, { useState } from "react"
import Modal from "../Modal/Modal"

export default function Project(props) {
	const [showModal, setShowModal] = useState(false)

	const closeModal = () => {
		setShowModal(false)
	}

	return (
		<div
			id='Project'
			className='flex flex-wrap justify-center px-2 text-center py-3 bg-theme-primary-2 text-white flex-col lg:flex-row py-40'
		>
			<div className='flex justify-center items-center flex-col'>
				<h3 className='text-center text-white text-xl md:text-2xl lg:text-1xl'>
					{props.title}
				</h3>
				<br></br>
				<img
					onClick={() => setShowModal(true)}
					className='shadow-inner rounded-lg cursor-pointer	hover:opacity-95 '
					src={props.imageSrc}
					alt={props.imageAlt}
					at
				/>
				{props.description}

				<div className='flex justify-center'>
					<button
						onClick={() => setShowModal(true)}
						type='button'
						className='text-white w-full border-blue border-2 focus:ring-4 focus:outline-none focus:ring-cyan-300
	dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-20 py-2.5 text-center m-2 hover:bg-blue w-100'
					>
						Learn More
					</button>
				</div>
			</div>
			<Modal
				gif={props.gif}
				title={props.title}
				showModal={showModal}
				closeModal={closeModal}
				githubLink={props.githubLink}
				modalDescription={props.modalDescription}
				liveLink={props.liveLink}
			/>
		</div>
	)
}
