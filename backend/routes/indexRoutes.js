const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const Admin = require('../models/admin')

router.get('/all', async function(req, res){
    var products = await Product.find()
    console.log(products)
    res.send(products)
})

router.get('/:cat', async function(req, res){
    var products = await Product.find({category: req.params.cat})
    console.log(products)
    res.send(products)
})

module.exports = router;