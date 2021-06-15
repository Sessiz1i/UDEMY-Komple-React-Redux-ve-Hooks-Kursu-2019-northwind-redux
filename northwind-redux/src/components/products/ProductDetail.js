import React from 'react';
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";


const ProductDetail = ({categories, product, onSave, onChange, errors}) => {
	return (
		<form onSubmit={onSave}>
			<h1>{product.id ? "Update" : "Create"}</h1>
			<TextInput
				type="text"
				name="productName"
				label="Product Name"
				value={product.productName}
				onChange={onChange}
				error={errors.productName}/>
			<SelectInput name="categoryId"
						 label="Category"
						 value={product.categoryId || ""}
						 defaultOption="Select..."
						 options={categories.map(category => ({
							 value: category.id,
							 text: category.categoryName
						 }))}
						 onChange={onChange}
						 error={errors.categoryId}/>
			<TextInput
				type="text"
				name="unitPrice"
				label="Unit Price"
				value={product.unitPrice}
				onChange={onChange}
				error={errors.unitPrice}/>
			<TextInput
				type="text"
				name="quantityPerUnit"
				label="Quantity Per Unit"
				value={product.quantityPerUnit}
				onChange={onChange}
				error={errors.quantityPerUnit}/>
			<TextInput
				type="text"
				name="unitsInStock"
				label="Units In Stock"
				value={product.unitsInStock}
				onChange={onChange}
				error={errors.unitsInStock}/>
			<div className="col-md-4 mx-auto">
				<button type="submit"
						className="btn btn-success mt-2 mx-auto">{product.id ? "Update" : "Create"}</button>
			</div>

		</form>
	);
};
export default ProductDetail;