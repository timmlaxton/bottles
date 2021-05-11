import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Col, Row, Image, Container, Card } from 'react-bootstrap';
import Beer from '../components/Beer';
import Gin from '../components/Gin';
import Message from '../components/Message';
import Loader from '../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { listGins } from '../actions/ginActions';
import { listBeers } from '../actions/beerActions';

const HomeScreen = () => {
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();

	const ginList = useSelector((state) => state.ginList);
	const { loading: loadingGin, error: errorGin, gins } = ginList;

	const beerList = useSelector((state) => state.beerList);
	const { loading, error, beers } = beerList;

	useEffect(() => {
		dispatch(listGins());
		dispatch(listBeers());
	}, [dispatch]);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	AOS.init();

	return (
		<>
			<Carousel activeIndex={index} onSelect={handleSelect}>
				<Carousel.Item data-aos="zoom-in">
					<img className="carousel" src="holder.js/800x400?text=Third slide&bg=20232a" alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Second slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="carousel" src="holder.js/800x400?text=Third slide&bg=20232a" alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<Container className="containter-1">
				<Row>
					<Image className="skulls" src="images/skull.jpg" />
					<div className="text">
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
						<p> efwef wefwef ewfwef cweferg regerg rgerg rffw vervfer</p>
					</div>
				</Row>
			</Container>

			<Container data-aos="fade-up">
				<h2 className="beer-tag">Beers</h2>
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Row className="cards-row">
						{beers.map((beer) => (
							<Col data-aos="fade-up" className="cards" key={beer._id} sm={3} md={3} lg={3} xl={3}>
								<Beer beer={beer} />
							</Col>
						))}
					</Row>
				)}
			</Container>

			<Container className="containter-2">
				<Row>
					<Col className="">
						<Card className="cardHome my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
					</Col>
					<Col className="col-3">
						<Card className="card my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
					</Col>
					<Col className="col-3">
						<Card className="card my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
					</Col>
					<Col className="col-3">
						<Card className="card my-3 p-3">
							<a href="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
								<Card.Img
									className="card-image"
									src="https://images.unsplash.com/photo-1583195502574-bc095eb3df40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmUlMjBib3R0bGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
									variant="top"
								/>
							</a>
						</Card>
					</Col>
				</Row>
			</Container>

			<Container data-aos="fade-up" className="categories-gin">
				<h2 className="gin-tag">Gins</h2>
				{loadingGin ? (
					<Loader />
				) : errorGin ? (
					<Message variant="danger">{errorGin}</Message>
				) : (
					<Row className="cards-row">
						{gins.map((gin) => (
							<Col data-aos="fade-right" className="cards" key={gin._id} sm={3} md={3} lg={3} xl={3}>
								<Gin gin={gin} />
							</Col>
						))}
					</Row>
				)}
			</Container>
		</>
	);
};

export default HomeScreen;
