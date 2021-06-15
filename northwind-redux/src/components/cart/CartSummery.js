import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";
import alert from "alertifyjs";


class CartSummery extends Component {
	removeFromCart(product){
		this.props.actions.removeFromCart(product)
		alert.error(`<strong color="with">${product.productName}</strong> Remove From Cart`)
	}
	renderEmpty() {
		return (
			<NavItem>
				<NavLink>Empty Cart</NavLink>
			</NavItem>
		)
	}

	renderSummery() {
		return (
			<UncontrolledDropdown nav>
				<DropdownToggle nav caret>
					Your Cart :{" "}{this.props.cart.length}
				</DropdownToggle>
				<DropdownMenu right>
					{
						this.props.cart.map(cartItem => (
							<DropdownItem key={cartItem.product.id}>
								<div className="">
									<Badge
										onClick={_ => this.removeFromCart(cartItem.product)}
										className="bg-danger">X</Badge>
									<span className="text-start">&nbsp;&nbsp;{cartItem.product.productName}&nbsp;&nbsp;</span>
									<Badge className="bg-secondary">{cartItem.quantity}</Badge>
								</div>
							</DropdownItem>
						))
					}
					<DropdownItem divider/>
					<DropdownItem>
						<Link to={"/cart"} className="nav-link">Go To Cart</Link>
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		)
	}

	render() {
		return (this.props.cart.length > 0 ? this.renderSummery() : this.renderEmpty());
	}
}

function mapStateToProps(state) {
	return {
		cart: state.cartReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummery);