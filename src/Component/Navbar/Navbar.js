import React from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
	const location = useLocation()
	const isHome = location.pathname === "/"

	return (
		<div className='sti'>
			<nav className='z-50 min-w-full flex flex-wrap items-center justify-between px-2 py-3 bg-theme-primary-1'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<RouterLink
							to="/"
							className="cursor-pointer text-xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-blue"
						>
							Mike Cioffi
						</RouterLink>
					</div>
					<div className='flex flex-grow items-center lg:justify-end justify-center w-full lg:w-auto'>
						<ul className='flex flex-row list-none'>
							<li className='nav-item'>
								<RouterLink
									to="/projects"
									className="cursor-pointer px-3 py-2 flex items-center text-xl uppercase font leading-snug text-white hover:text-blue-light transition-colors duration-200"
								>
									<span className='ml-2'>Projects</span>
								</RouterLink>
							</li>
							<li className='nav-item'>
								<RouterLink
									to="/blog"
									className="cursor-pointer px-3 py-2 flex items-center text-xl uppercase font leading-snug text-white hover:text-blue-light transition-colors duration-200"
								>
									<span className="ml-2">Blog</span>
								</RouterLink>
							</li>

							<li className='nav-item'>
								<a
									className='cursor-pointer px-3 py-2 flex items-center text-xl uppercase font leading-snug text-white hover:text-blue-light transition-colors duration-200'
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
