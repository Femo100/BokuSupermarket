const Product = require('../Models/Products'); //Import the Product model to interact with the products collection in the database
 

//create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, size } = req.body;

        const product = new Product({ name, description, price, quantity, size });

        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(400).json({ message: "Error creating product", error: error.message });
    }
};  

//update a product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params; //where the product id is passed to be updated
        const { name, description, price, quantity, size } = req.body;

        const product = await Product.findByIdAndUpdate(id, { name, description, price, quantity, size }, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(400).json({ message: "Error updating product", error: error.message });
    }
};

//get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
}; 

//get a single product by id
exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
};  

//delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }   

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};

//search products by name
exports.searchProductsByName = async (req, res) => {
    try {
        const { name } = req.query;
        const products = await Product.find({ name: { $regex: name, $options: 'i' } }); // Case-insensitive search
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error searching products", error: error.message });
    }
}; 

//search products by size
exports.searchProductsBySize = async (req, res) => {
    try {
        const { size } = req.query;
        const products = await Product.find({ size: { $regex: size, $options: 'i' } }); 
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error searching products", error: error.message });
    }
};
