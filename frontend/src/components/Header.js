import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Swally</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<LinkContainer to="/beers">
								<Nav.Link>Beers</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/spirits">
								<Nav.Link>Spirits</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/wines">
								<Nav.Link>Wines</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/whiskey">
								<Nav.Link>Whiskey</Nav.Link>
							</LinkContainer>
						</Nav>
						<Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<i className="fas fa-shopping-bag"></i>
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link>Sign In</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
