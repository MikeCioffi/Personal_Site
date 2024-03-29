import React from "react"

export default function About() {
	return (
		<div
			id='About'
			className='flex flex-wrap items-center justify-center px-2 text-center py-3 bg-neutral-800 h-screen text-slate-50 mt--5'
		>
			<ol className='relative border-l border-gray-200 dark:border-gray-700'>
				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
						February 2022
					</time>
					<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
						Application UI code in Tailwind CSS
					</h3>
					<p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
						Get access to over 20+ pages including a dashboard layout, charts,
						kanban board, calendar, and pre-order E-commerce & Marketing pages.
					</p>
				</li>
				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
						March 2022
					</time>
					<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
						Marketing UI design in Figma
					</h3>
					<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
						All of the pages and components are first designed in Figma and we
						keep a parity between the two versions even as we update the
						project.
					</p>
				</li>
				<li className='ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
						April 2022
					</time>
					<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
						E-Commerce UI code in Tailwind CSS
					</h3>
					<p className='text-base font-normal text-gray-500 dark:text-gray-400'>
						Get started with dozens of web components and interactive elements
						built on top of Tailwind CSS.
					</p>
				</li>
			</ol>
		</div>
	)
}
