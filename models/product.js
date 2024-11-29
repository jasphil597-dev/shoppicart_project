import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: String,
	// Additional product fields as needed...
});

const Product = mongoose.model('Product', productSchema);

export default Product;