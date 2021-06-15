import React, {Component} from 'react';
import {connect} from "react-redux";
import {Badge, Table} from "reactstrap";
import {bindActionCreators} from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import {Link} from "react-router-dom";


class ProductList extends Component {
	componentDidMount() {
		this.props.actions.getProducts();
	}

	addToCart = product => {
		this.props.actions.addToCart({product, quantity: 1})
		alertify.success(`<strong>${product.productName}</strong> <br> Add To Cart`)
	}

	render() {
		return (
			<div>
				<h3><Badge className="bg-secondary">Prodact</Badge>{" "}
					<Badge className="bg-warning">
						{this.props.currentCategory.categoryName}
					</Badge>
					{" "}
					<Badge className="bg-primary">Sort:{" "}
						{this.props.products.length}
					</Badge>
				</h3>
				<Table hover>
					<thead>
					<tr>
						<th>#</th>
						<th>Product Name</th>
						<th>Quantity Per Unit</th>
						<th>Unit Price</th>
						<th>Units In Stock</th>
						<th width="100">Actions</th>

					</tr>
					</thead>
					<tbody>
					{this.props.products.map(product => (
						<tr key={product.id}>
							<th scope="row">{product.id}</th>
							<td><Link to={"/save-product/" + product.id}
									  style={{textDecoration: 'none'}}
									  className="text-dark">{product.productName}</Link></td>
							<td>{product.quantityPerUnit}</td>
							<td>{product.unitPrice}</td>
							<td>{product.unitsInStock}</td>
							<td>
								<Badge
									onClick={_ => this.addToCart(product)}
									className="bg-success"
									Style={"cursor: pointer"}
								>AddToCart
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
		currentCategory: state.changeCategoryReducer,
		products: state.productListReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			getProducts: bindActionCreators(productActions.getProducts, dispatch),
			addToCart: bindActionCreators(cartActions.addToCart, dispatch)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);