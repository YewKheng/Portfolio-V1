export const IconCard = ({ name, img }) => {
	return (
		<div className="item">
			<img src={img}></img>
			<h5>{name}</h5>
		</div>
	);
};
