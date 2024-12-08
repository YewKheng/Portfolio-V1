import "./contact.scss";
import { Container, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const slideDown = {
	slideDownInitial: {
		y: -50,
		opacity: 0,
	},
	slideDownAnimate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 1.5,
		},
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

export const Contact = () => {
	const formRef = useRef();
	const [sendButton, setSendButton] = useState("Send");
	const sendEmail = (event) => {
		event.preventDefault();
		setSendButton("Sending...");

		emailjs
			.sendForm("service_3w7tztd", "template_c0ycdz9", formRef.current, "sYgtK6-JaEK3IqCYc")
			.then(
				(result) => {
					console.log(result.text);
					setSendButton("Sent");
					formRef.current.reset();

					setTimeout(() => {
						setSendButton("Send");
					}, 3000);
				},
				(error) => {
					console.log(error.text);
					setSendButton("Failed");
				}
			);
	};

	return (
		<section className="contact block" id="contact">
			<Container fluid>
				<motion.div
					className="title-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="titleSlideAnimate">
					<h2>Contact</h2>
				</motion.div>
				<motion.div
					className="subtitle-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="subtitleSlideAnimate">
					<h6>Get Connected With Me</h6>
				</motion.div>
				<Form className="form-block" ref={formRef} onSubmit={sendEmail}>
					<Row>
						<Col sm={4}>
							<FloatingLabel controlId="floatingInput" label="Full Name">
								<Form.Control type="text" placeholder="Full Name" name="name" required />
							</FloatingLabel>
						</Col>
						<Col sm={4}>
							<FloatingLabel controlId="floatingInput" label="Email Address">
								<Form.Control type="email" placeholder="name@example.com" name="email" required />
							</FloatingLabel>
						</Col>
						<Col sm={4}>
							<FloatingLabel controlId="floatingInput" label="Phone Number">
								<Form.Control type="tel" placeholder="Phone Number" name="phone" />
							</FloatingLabel>
						</Col>
					</Row>
					<Row>
						<Col>
							<FloatingLabel controlId="floatingTextArea" label="Message">
								<Form.Control as="textarea" placeholder="Message" name="message" required />
							</FloatingLabel>
						</Col>
					</Row>
					<div className="button-block">
						<button>
							<div className="svg-wrapper">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path
										fill="currentColor"
										d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
								</svg>
							</div>
							<span>{sendButton}</span>
						</button>
					</div>
				</Form>
			</Container>
			<Container fluid>
				<motion.div
					className="info-block"
					variants={slideDown}
					initial="slideDownInitial"
					whileInView="slideDownAnimate">
					<ul>
						<motion.li className="icon" variants={slideDown}>
							<motion.i className="bx bxs-envelope" variants={slideDown}></motion.i>
							kyewkheng@gmail.com
						</motion.li>
						<motion.li className="icon" variants={slideDown}>
							<motion.i className="bx bxs-phone" variants={slideDown}></motion.i>+44 7591 419794
						</motion.li>
						<motion.li className="icon" variants={slideDown}>
							<motion.i className="bx bx-current-location" variants={slideDown}></motion.i>
							Colchester, United Kingdom
						</motion.li>
					</ul>
				</motion.div>
			</Container>
		</section>
	);
};
