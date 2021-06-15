import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/actions/categoryActions"
import * as productActions from "../../redux/actions/productActions";
import {Badge, ListGroup, ListGroupItem} from "reactstrap";


class CategoryList extends Component {
	componentDidMount() {
		this.props.actions.getCategories()
	}

	selectCategory = category => {
		this.props.actions.changeCategory(category)
		this.props.actions.getProducts(category.id)
	}

	render() {
		return (
			<div>
				<h3><Badge className="bg-dark">Categories</Badge></h3>
				<ListGroup>
					{this.props.categories.map(category => (
						<ListGroupItem
							active={category.id === this.props.currentCategory.id ? true : false}
							onClick={_ => this.selectCategory(category)}
							key={category.id}
							style={{cursor: 'pointer'}}>
							{category.categoryName}{" "}
						</ListGroupItem>
					))}
				</ListGroup>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		currentCategory: state.changeCategoryReducer,
		categories: state.categoryListReducer,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
			changeCategory: bindActionCreators(categoryActions.changeCatagory, dispatch),
			getProducts: bindActionCreators(productActions.getProducts, dispatch)

		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);