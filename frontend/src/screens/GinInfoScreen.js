import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import { listGinDetails } from '../actions/ginActions';

const GinInfoScreen = ({ match, history }) => {
	const dispatch = useDispatch();
	const [qty, setQty] = useState(1);

	const ginDetails = useSelector((state) => state.ginDetails);
	const { loading, error, gin } = ginDetails;

	useEffect(() => {
		dispatch(listGinDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};

	return (
		<>
			<Link className="backbtn btn-light my-3" to="/">
				←
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image className="infoimage" src={gin.image} alt={gin.name} fluid />
					</Col>
					<Col md={6}>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h3>{gin.brand}</h3>
								<h4 className="infoprice">£{gin.price} </h4>
							</ListGroup.Item>
						</ListGroup>
						<ListGroup.Item className="infodescription">{gin.description}</ListGroup.Item>
						<ListGroup.Item className="infostock">
							<ListGroup.Item className="infostatus">
								<Row>
									<>{gin.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</>
								</Row>
							</ListGroup.Item>

							{gin.countInStock > 0 && (
								<ListGroup.Item className="infoqty">
									<Row>
										<Col>Qty</Col>

										<Form.Control className="formqty" as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
											{[...Array(gin.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
										<ListGroup.Item className="infobutton">
											<Button
												onClick={addToCartHandler}
												className="btn-block"
												type="button"
												disabled={gin.countInStock === 0}
											>
												Add To Cart
											</Button>
										</ListGroup.Item>
									</Row>
								</ListGroup.Item>
							)}
						</ListGroup.Item>
					</Col>
				</Row>
			)}
		</>
	);
};

export default GinInfoScreen;
