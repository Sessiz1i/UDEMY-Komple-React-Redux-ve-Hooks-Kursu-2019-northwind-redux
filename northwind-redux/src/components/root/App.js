import React, {Component} from 'react';
import {Container} from "reactstrap";
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import {Route,Switch} from "react-router-dom"
import NotFount from "../common/NotFount";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";



class App extends Component {
	render() {
		return (
			<Container>
				<Navi/>
				<Switch>
					<Route path="/" exact component={Dashboard}/>
					<Route path="/product" exact component={Dashboard}/>
					<Route path="/cart" exact component={CartDetail}/>
					<Route path="/save-product/:productId" component={AddOrUpdateProduct}/>
					<Route path="/save-product" component={AddOrUpdateProduct}/>
					<Route  exact component={NotFount}/>
				</Switch>
			</Container>
		);
	}
}

export default App;

