import React, {Component} from 'react';
import {Label} from "reactstrap";

class FormDemo1 extends Component {
	state = {userName: "",city:""}
	onChangeHandler = (event) => {
	//	this.setState({userName: event.target.value})
		let name = event.target.name
		let value = event.target.value
		this.setState({[name]:[value]})
	}

	onSubmitHandler =(event) =>{
		event.preventDefault()
	alert([this.state.userName,this.state.city])
}


	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandler} action="">
					<div className="form-group">
						<h2 className="form-label">User Name is {this.state.userName}</h2>
						<input type="text" name="userName" className="col-3 form-control"
							   onChange={this.onChangeHandler}/>
					</div>
					<br/>
					<div className="form-group">
						<h2 className="form-label">City is {this.state.city}</h2>
						<input type="text" name="city" className="col-3 form-control"
							   onChange={this.onChangeHandler}/>
					</div>
					<div className="form-group">
						<input type="submit" value="Submit" className="btn btn-outline-secondary mt-3 float-end"/>
					</div>


				</form>
			</div>
		);
	}
}

export default FormDemo1;