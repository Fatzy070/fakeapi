const Product = require('../models/ProductSchema')
const cloudinary = require('../config/cloudinary');


const controller = {
    getProducts: async (req , res) => {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({ message:  'server error '})
        }
    },
   createProduct: async (req, res) => {
    const { model, price, year } = req.body;

    try {
        // check if image dey come
        if (!req.file) {
            return res.status(400).json({ message: 'No image file uploaded' });
        }

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'products'
        });

        const newProduct = new Product({
            model,
            price,
            year,
            imageUrl: result.secure_url  // 🔥 Add the image URL from Cloudinary
        });

        await newProduct.save();
        res.status(201).json(newProduct);
        console.log(result.secure_url)

    } catch (error) {
        console.error('cannot create product', error);
        res.status(500).json({ message: 'server error while creating product' });
    }
}

}

module.exports = controller