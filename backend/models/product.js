var {model, Schema, Mongoose} = require("mongoose")

var ProductSchema = Schema ({
    name: {type: String}, 
    description: {type: String},
    price: {type: Number},
    category: {type: String}
})

module.exports = model('products', ProductSchema)

// Product = model('products', ProductSchema)

// console.log(Product.find())