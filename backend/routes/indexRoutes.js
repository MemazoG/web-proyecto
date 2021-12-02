const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const Admin = require('../models/admin')

router.get('/all', async function(req, res){
    var products = await Product.find()
    console.log(products)
    res.send(products)
})

router.get('/products/:cat', async function(req, res){
    var products = await Product.find({category: req.params.cat})
    console.log(products)
    res.send(products)
})

router.get('/:id', async function(req, res){
    var product = await Product.find({_id: req.params.id})
    console.log(product)
    res.send(product)
})
// const adminRoutes = require('./adminroutes');

// app.use('/admin', adminRoutes)

module.exports = router;