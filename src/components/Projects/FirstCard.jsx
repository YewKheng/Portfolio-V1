import projectList from "./projectList";
import { Row, Col } from "react-bootstrap";

export const FirstCard = () => {
	return (
		<Row className="project-list">
			{projectList
				.filter((projects) => projects.id <= 6)
				.map((projects) => {
					return (
						<Col md={6} lg={4} key={projects.id}>
							<div className="projects-wrapper">
								<img src={projects.img} />
								<div className="overlay">
									<div className="text-block">
										<h3>{projects.title}</h3>
										<p>{projects.description}</p>
									</div>
									<div className="link-block">
										<a href={projects.demo} target="_blank">
											<button className="links">Demo</button>
										</a>
										<a href={projects.source} target="_blank">
											<button className="links">Source</button>
										</a>
									</div>
								</div>
							</div>
						</Col>
					);
				})}
		</Row>
	);
};
