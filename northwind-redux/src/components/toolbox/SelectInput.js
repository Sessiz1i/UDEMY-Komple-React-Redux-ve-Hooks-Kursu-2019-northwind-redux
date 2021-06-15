import React from 'react';

const SelectInput = ({label, name, onChange, defaultOption, value, error, options}) => {
	let wrapperClass = "form-select";
	if (error && error.length > 0) {
		wrapperClass += " is-invalid";
	} else {
		/*wrapperClass += " is-valid";*/
	}
	return (
		<div className="col-md-4 mx-auto">
			<label htmlFor={name} className="form-label">{label}</label>
			<select name={name} value={value} onChange={onChange}
					className={wrapperClass} required>
				<option selected disabled value="">{defaultOption}</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>{option.text}</option>
				))}
			</select>
			{error && <strong className="invalid-feedback">{error}</strong>}
		</div>
	)
}
 export default SelectInput;