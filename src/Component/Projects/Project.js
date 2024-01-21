import React, { useState } from "react"
import Modal from "../Modal/Modal"

export default function Project(props) {
	const [showModal, setShowModal] = useState(false)

	const closeModal = () => {
		setShowModal(false)
		props.toggleScroll()
	}

	const openModal = () => {
		setShowModal(true)
		props.toggleScroll()
	}

	return (
		<div
			id='Project'
			className='flex flex-wrap justify-center px-2 text-center  bg-theme-primary-2 text-white flex-col lg:flex-row py-40'
		>
			<div className='flex justify-center items-center flex-col'>
				<h3 className='text-center text-white text-xl md:text-2xl lg:text-1xl'>
					{props.title}
				</h3>
				<br></br>
				<img
					onClick={openModal}
					className='shadow-inner rounded-xl cursor-pointer hover:opacity-95 h-full w-full'
					src={props.imageSrc}
					alt={props.imageAlt}
				/>
				{props.description}

				<div className='flex justify-center'>
					<button
						onClick={openModal}
						type='button'
						className='text-white w-full border-blue border-2 focus:ring-4 focus:outline-none focus:ring-cyan-300
	dark:focus:ring-cyan-800 font-medium rounded-xl text-sm px-20 py-2.5 text-center m-2 hover:bg-blue w-100'
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
