import React from "react"
import { Link } from "react-scroll"
import "./navbar.css"

export default function Navbar() {
	return (
		<div className='sti'>
			<nav className='sticky z-50 sticky top-0  min-w-full flex flex-wrap items-center justify-between px-2 py-3 bg-neutral-800'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative hidden justify-between w-auto lg:static lg:block lg:justify-start'>
						<Link
							duration={300}
							className='cursor-pointer text-xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-blue'
							to='Intro'
							smooth={true}
						>
							Mike Cioffi
						</Link>
					</div>
					<div className='flex flex-grow items-center'>
						<ul className='flex flex-row list-none ml-auto'>
							<li className='nav-item'>
								<Link
									duration={300}
									activeClass='text-blue'
									className=' cursor-pointer px-3 py-2 flex items-center text-xl uppercase font leading-snug text-white hover:opacity-75'
									to='About'
									smooth={true}
								>
									<span className='ml-2'>About</span>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									duration={300}
									activeClass='text-blue'
									className=' cursor-pointer px-3 py-2 flex items-center text-xl uppercase font leading-snug text-white hover:opacity-75'
									to='Project'
									smooth={true}
								>
									<span className='ml-2'>Projects</span>
								</Link>
							</li>
							<li className='nav-item'>
								<a
									className=' cursor-pointer px-3 py-2 flex items-center text-xl uppercase font leading-snug text-white hover:opacity-75'
									href="mailto:mike.cioffi95@gmail.com?Subject=Hi! I'm reaching out from your website."
								>
									<span className='ml-2'>Contact</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}
