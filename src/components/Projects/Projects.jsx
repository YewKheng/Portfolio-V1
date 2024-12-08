import "./projects.scss";
import { FirstCard } from "./FirstCard";
import { SecondCard } from "./SecondCard";
import { ThirdCard } from "./ThirdCard";
import { Container, Nav, Tab } from "react-bootstrap";
import { motion } from "framer-motion";

const titleSlide = {
	titleSlideInitial: {
		y: -100,
		opacity: 0,
	},
	titleSlideAnimate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.1,
		},
	},
	subtitleSlideAnimate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};

export const Projects = () => {
	return (
		<section className="projects block" id="projects">
			<Container fluid>
				<motion.div
					className="title-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="titleSlideAnimate">
					<h2>Projects</h2>
				</motion.div>
				<motion.div
					className="subtitle-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="subtitleSlideAnimate">
					<h6>My Recent Projects</h6>
				</motion.div>
				<Tab.Container defaultActiveKey="first">
					<Nav variant="pills" className="nav-block">
						<Nav.Item>
							<Nav.Link eventKey="first">Tab 1</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="second">Tab 2</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="third">Tab 3</Nav.Link>
						</Nav.Item>
					</Nav>
					<Tab.Pane eventKey="first">
						<FirstCard />
					</Tab.Pane>
					<Tab.Pane eventKey="second">
						<SecondCard />
					</Tab.Pane>
					<Tab.Pane eventKey="third">
						<ThirdCard />
					</Tab.Pane>
				</Tab.Container>
			</Container>
		</section>
	);
};
