import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Gin from '../components/Gin';

const GinScreen = ({ match }) => {
	const [gins, setGins] = useState([]);

	useEffect(() => {
		const fetchGins = async () => {
			const { data } = await axios.get('/api/gins');
			setGins(data);
		};

		fetchGins();
	}, []);

	return (
		<>
			<h1 className="gin-title">Gins</h1>
			<Row>
				{gins.map((gin) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<Gin gin={gin} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default GinScreen;
