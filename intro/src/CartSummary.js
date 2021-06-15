import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";


class CartSummary extends Component {
	renderSummary() {
		return (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
						Your Cart: {this.props.cart.length}
				</DropdownToggle>
				<DropdownMenu right>
					{this.props.cart.map(cartItem => (
						<div>
							<DropdownItem key={cartItem.product.id}>
								<Badge className="bg-danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>{" "}
								<span>{cartItem.product.productName}</span> {" "}
								<Badge className="bg-primary"> {" "} {cartItem.quantity}</Badge>
							</DropdownItem>
						</div>
					))}
					<DropdownItem divider/>
					<DropdownItem>
						<Link to="cart">Go to cart!</Link>
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		)

	}

	render() {
		return (
			<div>
				{this.props.cart.length > 0 ? this.renderSummary() : <DropdownToggle nav>Empty Cart</DropdownToggle>}
			</div>
		);
	}
}

export default CartSummary;
