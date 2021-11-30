const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const Admin = require('../models/admin')

router.get('/', async function (req, res){
    var admins = await Admin.find()
    console.log(admins)
    res.send(admins)
})

router.post('/newProduct', async function(req, res){
    var product = new Product(req.body);
    await product.save()
    res.send(product);
})

router.get('/editProduct/:id', async function (req, res){
    var product = await Product.findById(req.params.id)
    res.send(product)
})

router.post('/editProduct/:id', async function (req, res){
    var id = req.params.id
    await Product.updateOne({_id: id}, req.body)
    res.redirect('/');
})

router.get('/delProduct/:id', async function (req, res){
    var product = await Product.findById(req.params.id)
    res.send(product)
})

router.post('/delProduct/:id', async function (req, res){
    var id = req.params.id
    await Product.remove({_id: id})
    res.redirect('/')
})

module.exports = router;