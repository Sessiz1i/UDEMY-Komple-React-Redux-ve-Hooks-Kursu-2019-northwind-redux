import React, {useState} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Row
} from 'reactstrap';
import CartSummery from "../cart/CartSummery";
import {Link} from "react-router-dom";

const Navi = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Row>
			<Navbar color="with" light expand="xs">
				<NavbarBrand>
					<Link to={"/"} className="nav-link text-dark">Mağazam</Link>
				</NavbarBrand>
				<NavbarToggler onClick={toggle}/>
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ms-auto" navbar>
						<NavItem>
							<Link to="/save-product" className="nav-link text-secondary">Create
								Product</Link>
						</NavItem>
						<CartSummery/>
					</Nav>
					{/*<NavbarText>Simple Text</NavbarText>*/}
				</Collapse>
			</Navbar>
		</Row>
	);
}

export default Navi;