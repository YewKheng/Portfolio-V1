import "./app.scss";
import { NavBar, Hero, About, Projects, Resume, Contact, Footer } from "./components";

export const App = () => {
	return (
		<div>
			<header>
				<NavBar />
			</header>
			<main>
				<Hero />
				<About />
				<Projects />
				<Resume />
				<Contact />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};
