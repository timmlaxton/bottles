import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Gin = ({ gin }) => {
	return (
		<Card className="card my-3 p-3">
			<Link to={`/gin/${gin._id}`}>
				<Card.Img src={gin.image} variant="top" />
			</Link>
			<Card.Body>
				<Link to={`/gin/${gin._id}`}>
					<Card.Title className="gin-brand" as="div">
						<strong>{gin.brand}</strong>
					</Card.Title>
				</Link>
				<Card.Text className="gin-price" as="h5">
					£{gin.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Gin;
