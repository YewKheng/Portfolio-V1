import "./resume.scss";
import { Container, Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import { PDF } from "../../assets";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

export const Resume = () => {
	return (
		<section className="resume block" id="resume">
			<Container fluid>
				<motion.div
					className="title-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="titleSlideAnimate">
					<h2>Resume</h2>
				</motion.div>
				<motion.div
					className="subtitle-holder"
					variants={titleSlide}
					initial="titleSlideInitial"
					whileInView="subtitleSlideAnimate">
					<h6>My Current Resume</h6>
				</motion.div>
				<Row>
					<Col>
						<div className="resume-block">
							<Document file={PDF}>
								<Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
							</Document>
						</div>
						<div className="button-block">
							<a href={PDF} target="_blank">
								<button>
									<div className="svg-wrapper">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
											<path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
										</svg>
										<span className="bar-icon"></span>
									</div>
									<span className="text">Download PDF</span>
								</button>
							</a>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
