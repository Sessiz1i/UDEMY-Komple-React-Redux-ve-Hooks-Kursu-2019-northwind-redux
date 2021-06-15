import React, {Component} from 'react';
import {Row, Container, Col} from 'reactstrap';
import alertify from 'alertifyjs';
import {Route, Switch} from 'react-router-dom';
// Components ---------------------------------
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Navi from "./Navi";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";


class App extends Component {
	// Dada Functions
	state = {currentCategory: "All Products", products: [], cart: []}
	changeCategory = category => {
		this.setState({currentCategory: category.categoryName});
		this.getProducts(category.id);
	}

	getProducts = categoryId => {
		let url = "http://localhost:3000/products";
		if (categoryId) {
			url += "?categoryId=" + categoryId;
		}
		fetch(url)
		.then(datas => datas.json())
		.then(datas => this.setState({products: datas}))
	}

	componentDidMount() {
		this.getProducts();
	}

	// Cart Functions
	addToCart = (product) => {
		let newCart = this.state.cart;
		let addedItem = newCart.find(c => c.product.id === product.id);
		if (addedItem) {
			addedItem.quantity += 1;
		} else {
			newCart.push({product: product, quantity: 1});
		}
		this.setState({cart: newCart});
		alertify.notify("<strong>" + product.productName + "</strong><br> Added to cart!", "success",[1])
	}

	removeFromCart = (product) => {
		let newCart = this.state.cart.filter(c => c.product.id !== product.id)
		this.setState({cart: newCart})
		alertify.notify("<strong>" + product.productName + "</strong><br> Removed to cart!", "error",[1])

	}

	render() {
		let productData = {title: "Product Listesi"}
		let categoryData = {title: "Category Listesi"}
		return (
			<div>
				<Container>
					<Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
					<Row>
						<Col xs="3">
							<CategoryList
								currentCategory={this.state.currentCategory}
								changeCategory={this.changeCategory}
								data={categoryData}/>
						</Col>
						<Col xs="9">
							<Switch>
								<Route exact path="/" render={props => (
									<ProductList
										{...props}
										products={this.state.products}
										addToCart={this.addToCart}
										currentCategory={this.state.currentCategory}
										data={productData}/>

								)}/>
								<Route exact path="/cart" render={props => (
									<CartList
										{...props}
										cart={this.state.cart}
										removeFromCart={this.removeFromCart}/>
								)}/>
								<Route exact path="/form1" component={FormDemo1}/>
								<Route exact path="/form2" component={FormDemo2}/>
								<Route component={NotFound}/>
							</Switch>
						</Col>

					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
