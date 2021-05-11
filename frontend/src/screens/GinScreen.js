import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Gin from '../components/Gin';
import { listGins } from '../actions/ginActions';

const GinScreen = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listGins());
	}, [dispatch]);

	const gins = [];

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
