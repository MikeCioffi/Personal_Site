import React from "react"
// import About from "../Component/About/About"
import Intro from "../Component/Intro/Intro"
import Navbar from "../Component/Navbar/Navbar"
import Projects from "../Component/Projects/Projects"

import "./home.css"

export default function Home() {
	return (
		<>
			<Navbar />
			<Intro />
			{/* <About /> */}

			<Projects />
		</>
	)
}
