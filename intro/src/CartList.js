import React, {Component} from 'react';
import {Button, Table} from "reactstrap";

class CartList extends Component {
	renderCart() {
		return(
			<div>
				<h3>Cart List</h3>
				<Table bordered hover responsive>
					<thead>
					<tr>
						<th>#</th>
						<th>Product Name</th>
						<th>Quantity Per Unit</th>
						<th>Unit Price</th>
						<th>Units In Stock</th>
						<th>Quantity</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{this.props.cart.map(cartItem => (
						<tr key={cartItem.product.id}>
							<th scope="row">{cartItem.product.id}</th>
							<td>{cartItem.product.productName}</td>
							<td>{cartItem.product.quantityPerUnit}</td>
							<td>{cartItem.product.unitPrice}</td>
							<td>{cartItem.product.unitsInStock}</td>
							<td>{cartItem.quantity}</td>
							<th>
								<Button
									onClick={_ => this.props.removeFromCart(cartItem.product)}
									outline color="danger">Remove
								</Button>
							</th>
						</tr>
					))}
					</tbody>
				</Table>
			</div>

		)
	}
	render() {
		return (
			<div>
				{this.renderCart()}
			</div>
		);
	}
}

export default CartList;