import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Beer from '../components/Beer';

const BeerScreen = ({ match }) => {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		const fetchBeers = async () => {
			const { data } = await axios.get('/api/beers');
			setBeers(data);
		};

		fetchBeers();
	}, []);

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
