import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
// Components
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

class Dashboard extends Component {
	render() {
		return (
			<Row>
				<Col xs="4" className="">
					<CategoryList/>
				</Col>
				<Col xs="8" className="">
					<ProductList/>
				</Col>
			</Row>
		);
	}
}

export default Dashboard;