import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import "./navbar.css"

export default function Navbar({ fixed }) {
	return (
		<div className='sti'>
			<nav className='sticky z-50 absolute min-w-full flex flex-wrap items-center justify-between px-2 py-3 bg-neutral-800'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative hidden justify-between w-auto lg:static lg:block lg:justify-start'>
						<Link
							duration={300}
							className='cursor-pointer text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-sky-500'
							to='Intro'
							spy={true}
							smooth={true}
						>
							Mike Cioffi
						</Link>
					</div>
					<div className={"flex flex-grow items-center"}>
						<ul className='flex flex-row list-none ml-auto'>
							<li className='nav-item'>
								<Link
									duration={300}
									activeClass='text-sky-500'
									className=' cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									to='About'
									spy={true}
									smooth={true}
								>
									<span className='ml-2'>About Me</span>
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									duration={300}
									activeClass='text-sky-500'
									className=' cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									to='Project'
									spy={true}
									smooth={true}
								>
									<span className='ml-2'>Projects</span>
								</Link>
							</li>
							<li className='nav-item'>
								<a
									className=' cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href="mailto:mike.cioffi95@gmail.com?Subject=Hi! I'm reaching out from your website."
									spy={true}
									smooth={true}
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
