const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    model: String,
    price: Number,
    year: Number,
    imageUrl: {
    type: String,
    required: true
    }

})

module.exports = mongoose.model('products' , ProductSchema)