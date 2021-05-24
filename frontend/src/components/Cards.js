import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
	return (
		<div className="cards">
			<h1>Beers</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/BeaverTown.jpg" text="BeaverTown" labels="Beers" path="/beers" />
						<CardItem src="images/Gamma.jpg" text="Gamma" labels="Beers" path="/beers" />
						<CardItem src="images/BlackIslePorter.jpg" text="BlackIsle" labels="Beers" path="/beers" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
