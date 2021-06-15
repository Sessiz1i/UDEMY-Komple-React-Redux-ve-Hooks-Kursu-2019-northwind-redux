import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {connect} from "react-redux";
import {Badge, Table} from "reactstrap";
import alert from "alertifyjs";

class CartDetail extends Component {
	removeFromCart(product){
		this.props.actions.removeFromCart(product)
		alert.error(`<strong>${product.productName}</strong> Remove From Cart`)
	}
	render() {
		return (
			<div>
				{/*				<h3><Badge className="bg-secondary">Prodact</Badge>{" "}
					<Badge className="bg-warning">
						{this.props.currentCategory.categoryName}
					</Badge>
					{" "}
					<Badge className="bg-primary">Sort:{" "}
						{this.props.products.length}
					</Badge>
				</h3>*/}
				<Table hover>
					<thead>
					<tr>
						<th>#</th>
						<th>Product Name</th>
						<th>Unit Price</th>
						<th>Quantity</th>
						<th width="100">Actions</th>

					</tr>
					</thead>
					<tbody>
					{this.props.cart.map(cartItem => (
						<tr key={cartItem.product.id}>
							<th scope="row">{cartItem.product.id}</th>
							<td>{cartItem.product.productName}</td>
							<td>{cartItem.product.unitPrice}</td>
							<td>{cartItem.quantity}</td>
							<td>
								<Badge
									onClick={_ => this.removeFromCart(cartItem.product) }
									className="bg-danger"
									Style={"cursor: pointer"}
								>Remove
								</Badge>
							</td>
						</tr>
					))}
					</tbody>
				</Table>
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);