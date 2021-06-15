import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import CartSummary from "./CartSummary";
import {Link} from "react-router-dom";

class Navi extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="white" light expand="md">
					<NavbarBrand>
							<Link to="/" className="nav-link text-dark">HomePage</Link>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ms-auto" navbar>
							<NavItem>
								<Link to="form1" className="nav-link">Form Demo 1</Link>
							</NavItem>
							<NavItem>
									<Link to="form2" className="nav-link">Form Demo 2</Link>
							</NavItem>
							<NavItem>
								<CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navi;