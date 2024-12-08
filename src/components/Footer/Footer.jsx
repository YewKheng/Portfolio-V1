import "./footer.scss";
import { Container } from "react-bootstrap";

import { motion } from "framer-motion";

const pop = {
	initial: {
		opacity: 0,
		scale: 0,
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
		},
	},
};

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<section className="footer">
			<Container fluid>
				<div className="copyright-block">
					<h5>&copy; {year} Yew Kheng Kok. All Rights Reserved.</h5>
				</div>
				<motion.div className="social-block" variants={pop} initial="initial" whileInView="animate">
					<a className="icon" href="https://github.com/YewKheng" target="_blank">
						<i className="bx bxl-github"></i>
					</a>
					<a className="icon" href="https://www.linkedin.com/in/yewkhengkok/" target="_blank">
						<i className="bx bxl-linkedin"></i>
					</a>
				</motion.div>
			</Container>
		</section>
	);
};
