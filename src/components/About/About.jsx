import "./about.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import iconList from "./iconList";
import { ProfilePic } from "../../assets";
import { IconCard } from "./IconCard";
import { motion } from "framer-motion";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

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

export const About = () => {
	return (
		<section className="about block" id="about">
			<Container fluid>
				<motion.div
					className="title-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="titleSlideAnimate">
					<h2>About Me</h2>
				</motion.div>
				<motion.div
					className="subtitle-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="subtitleSlideAnimate">
					<h6>Learn More About Me</h6>
				</motion.div>
				<Row>
					<Col>
						<div className="text-block">
							<img className="profilePic" src={ProfilePic} alt="Yew Kheng Kok" />
							<p>
								I'm a Computer Systems Engineering graduate with a diverse background encompassing
								both hardware and software. I have a passion for self-learning in the realm of
								Front-End Web Development, building proficiency through projects, including the
								creation of this portfolio. I'm aspiring to land a fulfilling career dedicated to
								craft immersive web experiences.
							</p>
						</div>
						<div className="skills-block">
							<h2>Skills</h2>
							<p>Languages, Frameworks and Tools I Use</p>
							<Carousel
								className="skills-list"
								responsive={responsive}
								draggable={false}
								autoPlay={true}
								autoPlaySpeed={1800}
								infinite={true}>
								{iconList.map((icons, id) => {
									return <IconCard key={id} {...icons} />;
								})}
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
