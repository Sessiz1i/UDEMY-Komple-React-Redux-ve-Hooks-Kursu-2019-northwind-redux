import React, {Component} from 'react';
import alertify from 'alertifyjs';
import {Form, FormGroup, Input, Label, Button} from "reactstrap";


class FormDemo2 extends Component {
	state = {email: "", password: "", city: "", description: ""}

	handleChange = event => {
		let name = event.target.name,
			value = event.target.value;
		this.setState({[name]: [value]})
	}

	handleSubmit = event => {
		event.preventDefault();
		alertify.success(`Email: ${this.state.email} <br/>added to db!`)
		alertify.success(`Password: ${this.state.password} <br/>added to db!`)
		alertify.success(this.state.description + "<br/>added to db!")
		alertify.success(this.state.city + "<br/>added to db!")
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email"
							   name="email"
							   id="email"
							   placeholder="Enter email..."
							   onChange={this.handleChange}/>
					</FormGroup>
					<br/>
					<FormGroup>
						<Label for="password">Password</Label>
						<Input type="password"
							   name="password"
							   id="password"
							   placeholder="Enter password..."
							   onChange={this.handleChange}/>
					</FormGroup>
					<br/>
					<FormGroup>
						<Label for="password">Description</Label>
						<Input type="textarea"
							   name="description"
							   id="desc"
							   placeholder="Enter description..."
							   onChange={this.handleChange}/>
					</FormGroup>
					<br/>
					<FormGroup>
						<Label for="city">City</Label>
						<select type="select"
							   name="city"
							   id="city"
								className="form-select"
							   placeholder="Enter select..."
							   onChange={this.handleChange}>
							<option>City select...</option>
							<option>Ankara</option>
							<option>İstanbul</option>
							<option>İzmir</option>
							<option>Adana</option>
							<option>Diyarbakır</option>
						</select>
					</FormGroup>
					<FormGroup className="d-flex justify-content-end">
						<Button outline type="submit"
								name="submit"
								value="form2"
								className="btn btn-outline-secondary mt-3">
								Submit</Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default FormDemo2;