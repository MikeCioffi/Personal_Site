import React from "react"

export default function Modal(props) {
	return (
		<>
			{props.showModal ? (
				<>
					<div
						className='justify-center items-center flex overflow-x-hidden overflow-y-auto h-screen fixed inset-5 z-50 outline-none focus:outline-none'
						onClick={props.closeModal}
					>
						<div
							className='relative w-auto my-6 mx-auto xl:w-1/2'
							onClick={(e) => e.stopPropagation()}
						>
							{/*content*/}
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full min-h-max bg-white outline-none focus:outline-none'>
								{/*header*/}
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-3xl text-theme-primary-1 font-semibold'>
										{props.title}
									</h3>
									<button
										className='p-1 ml-auto bg-transparent border-0 text-red opacity-2 float-right text-3xl leading-none font-bold outline-none focus:outline-none'
										onClick={props.closeModal}
									>
										<span className='text-red bg-transparent bold text-red h-8 w-8 text-2xl block outline-none focus:outline-none'>
											×
										</span>
									</button>
								</div>
								{/*body*/}
								{/* left side of modal */}
								<div className='flex p-6 flex-auto flex-col lg:flex-row'>
									<div className='w-full lg:w-1/2'>
										<img
											src={props.gif}
											alt='gif'
											className='lg:h-96 shadow rounded'
										/>
									</div>
									{/* right side of modal */}
									<div className='w-full lg:w-1/2'>
										<div className='min-h-[80%]'>
											<p className='my-4 text-theme-primary-2 text-lg leading-relaxed'>
												{props.modalDescription}
											</p>
										</div>
										<div className='flex justify-center align-center'>
											<a href={props.liveLink}>
												<button
													type='button'
													class='text-white bg-blue hover:bg-blue-light border-blue border-2 focus:ring-4 focus:outline-none focus:ring-cyan-300	dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-blue'
												>
													Visit Site
												</button>
											</a>

											<a href={props.githubLink}>
												<button
													type='button'
													class='text-white bg-none border-none border-2 focus:ring-4 focus:outline-none focus:ring-cyan-300	dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center m-1'
												>
													<svg
														class='w-8 h-8'
														aria-hidden='true'
														focusable='false'
														data-prefix='fab'
														data-icon='github'
														role='img'
														viewBox='0 0 496 512'
													>
														<path
															fill='black'
															d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
														></path>
													</svg>
												</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	)
}
