import "./hero.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Mouse } from "../../assets";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BackgroundAnimation } from "./BackgroundAnimation";

const animation = {
	initial: {
		x: -500,
		opacity: 0,
	},
	slideIn: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.2,
		},
	},
	mouseScrolling: {
		y: 10,
		opacity: 0,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

export const Hero = () => {
	return (
		<section className="hero block" id="home">
			<Container>
				<Row>
					<Col md={6} xl={7}>
						<motion.div
							className="text-block"
							variants={animation}
							initial="initial"
							animate="slideIn">
							<motion.h2 variants={animation}>YEW KHENG KOK</motion.h2>
							<motion.div className="typing-container" variants={animation}>
								<TypeAnimation
									preRenderFirstString={true}
									sequence={["I am a Front-End \nWeb Developer", 1000, "I am a UI Designer", 1000]}
									deletionSpeed={20}
									speed={25}
									repeat={Infinity}
								/>
							</motion.div>
							<motion.img
								variants={animation}
								animate="mouseScrolling"
								className="scroll-img"
								src={Mouse}
								alt="Mouse Scrolling"
							/>
						</motion.div>
					</Col>
					<Col md={6} xl={5}>
						<div className="image-container">
							<BackgroundAnimation />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
