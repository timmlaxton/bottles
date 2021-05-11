import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Beer from '../components/Beer';
import { listBeers } from '../actions/beerActions';

const BeerScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listBeers());
	}, [dispatch]);

	const beers = [];

	return (
		<>
			<h1 className="beer-title">Beers</h1>
			<Row>
				{beers.map((beer) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Beer beer={beer} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default BeerScreen;
