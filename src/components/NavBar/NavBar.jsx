import "./navbar.scss";
import { Container, Navbar, Nav, Collapse } from "react-bootstrap";
import { motion } from "framer-motion";

const pop = {
	popInitial: {
		opacity: 0,
		scale: 0,
	},
	popAnimate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
};

export const NavBar = () => {
	return (
		<Navbar collapseOnSelect expand="md">
			<Container>
				<Navbar.Brand href="#home">
					<motion.div className="logo-block">
						<h3>YEW KHENG.</h3>
					</motion.div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">
							<motion.p variants={pop} initial="popInitial" animate="popAnimate">
								Home
							</motion.p>
						</Nav.Link>
						<Nav.Link href="#about">
							<motion.p variants={pop} initial="popInitial" animate="popAnimate">
								About
							</motion.p>
						</Nav.Link>
						<Nav.Link href="#projects">
							<motion.p variants={pop} initial="popInitial" animate="popAnimate">
								Projects
							</motion.p>
						</Nav.Link>
						<Nav.Link href="#resume">
							<motion.p variants={pop} initial="popInitial" animate="popAnimate">
								Resume
							</motion.p>
						</Nav.Link>
						<Nav.Link href="#contact">
							<motion.p variants={pop} initial="popInitial" animate="popAnimate">
								Contact
							</motion.p>
						</Nav.Link>
					</Nav>
					<motion.div
						className="social-block"
						variants={pop}
						initial="popInitial"
						animate="popAnimate">
						<motion.a
							className="icon"
							whileTap={{ scale: 0.5 }}
							whileHover={{ scale: 1.2 }}
							href="https://github.com/YewKheng"
							target="_blank">
							<i className="bx bxl-github"></i>
						</motion.a>
						<motion.a
							className="icon"
							whileTap={{ scale: 0.5 }}
							whileHover={{ scale: 1.2 }}
							href="https://www.linkedin.com/in/yewkhengkok/"
							target="_blank">
							<i className="bx bxl-linkedin"></i>
						</motion.a>
					</motion.div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
