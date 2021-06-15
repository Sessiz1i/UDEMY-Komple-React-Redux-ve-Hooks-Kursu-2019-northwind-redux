import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
	state = {
		categories: []
	};

	componentDidMount() {
		this.getCategories();
	}

	getCategories = () => {
		fetch("http://localhost:3000/categories")
		.then(res => res.json())
		.then(res => this.setState({categories: res}))
	}

	render() {
		return (
			<div className="pb-3">
				<h3>{this.props.data.title}</h3>
				<ListGroup>
					{
						this.state.categories.map(category => (
							<ListGroupItem active={category.categoryName === this.props.currentCategory ? true : false}
										   onClick={_ => this.props.changeCategory(category)}
										   key={category.id}>{category.categoryName}
							</ListGroupItem>
						))
					}
				</ListGroup>
			</div>
		);
	}
}

export default CategoryList;