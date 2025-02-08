import "./App.css"
import Home from "./Screens/Home"
import Admin from "./Screens/Admin"
import BlogPost from "./Screens/BlogPost"
import Blog from "./Screens/Blog"
import EmailLogin from "./Screens/EmailLogin"
import ProjectsPage from "./Screens/ProjectsPage"
import ProjectDetail from "./Screens/ProjectDetail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute"


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
				<Route path="/login" element={<EmailLogin />} />
				<Route
					path="/admin"
					element={
						<PrivateRoute>
							<Admin />
						</PrivateRoute>
					}
				/>
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/projects/:slug" element={<ProjectDetail />} />
			</Routes>
		</Router>
	)
}

export default App
