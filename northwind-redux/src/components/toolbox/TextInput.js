import React from "react";

const TextInput = ({type, label, name, onChange, placeHolder, value, error}) => {
	let wrapperClass = "form-control";
	if (error) {
		wrapperClass += " is-invalid";
	} else {
		wrapperClass += " is-valid";
	}
	return (
		<div className="col-md-4 mx-auto">
			<label htmlFor={name} className="form-label">{label}</label>
			<input type={type}
				   name={name}
				   className={wrapperClass}
				   placeholder={placeHolder}
				   value={value}
				   onChange={onChange}/>
			{error && <strong className="invalid-feedback">{error}</strong>}
		</div>
	)
}

export default TextInput;