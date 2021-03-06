import React, {Component} from 'react';
import {Table, Button} from "reactstrap";


class ProductList extends Component {

	render() {
		return (
			<div>
				<h3>{this.props.data.title} - {this.props.currentCategory}</h3>
				<Table bordered hover responsive>
					<thead>
					<tr>
						<th>#</th>
						<th>Product Name</th>
						<th>Quantity Per Unit</th>
						<th>Unit Price</th>
						<th>Units In Stock</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{this.props.products.map(product => (
						<tr key={product.id}>
							<th scope="row">{product.id}</th>
							<td>{product.productName}</td>
							<td>{product.quantityPerUnit}</td>
							<td>{product.unitPrice}</td>
							<td>{product.unitsInStock}</td>
							<th>
								<Button
									onClick={_ => this.props.addToCart(product)}
									outline color="info">Add
								</Button>{' '}
							</th>
						</tr>
					))}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ProductList;