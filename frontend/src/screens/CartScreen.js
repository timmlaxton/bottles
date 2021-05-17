import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
	const ginId = match.params.id;
	const beerId = match.params.id;

	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	useEffect(() => {
		if (ginId) {
			dispatch(addToCart(ginId, qty));
		} else {
			if (beerId) {
				dispatch(addToCart(beerId, qty));
			}
		}
	}, [dispatch, ginId, beerId, qty]);

	return <div>Cart</div>;
};

export default CartScreen;
