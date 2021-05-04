import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import BeerScreen from './screens/BeerScreen';
import BeerInfoScreen from './screens/BeerInfoScreen';
import GinScreen from './screens/GinScreen';
import GinInfoScreen from './screens/GinInfoScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/beer/:id" component={BeerInfoScreen} />
					<Route path="/beers" component={BeerScreen} exact />
					<Route path="/gin/:id" component={GinInfoScreen} />
					<Route path="/spirits" component={GinScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
