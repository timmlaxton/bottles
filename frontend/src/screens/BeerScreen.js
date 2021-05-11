import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Beer from '../components/Beer';
import { listBeers } from '../actions/beerActions';

const BeerScreen = () => {
	const dispatch = useDispatch();

	const beerList = useSelector((state) => state.beerList);
	const { loading, error, beers } = beerList;

	useEffect(() => {
		dispatch(listBeers());
	}, [dispatch]);

	return (
		<>
			<h1 className="beer-title">Beers</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{beers.map((beer) => (
						<Col sm={12} md={6} lg={4} xl={3}>
							<Beer beer={beer} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default BeerScreen;
