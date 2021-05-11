import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap';
import Gin from '../components/Gin';
import { listGins } from '../actions/ginActions';

const GinScreen = () => {
	const dispatch = useDispatch();

	const ginList = useSelector((state) => state.ginList);
	const { loading, error, gins } = ginList;

	useEffect(() => {
		dispatch(listGins());
	}, [dispatch]);

	return (
		<>
			<h1 className="gin-title">Gins</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{gins.map((gin) => (
						<Col sm={12} md={6} lg={4} xl={3}>
							<Gin gin={gin} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default GinScreen;
