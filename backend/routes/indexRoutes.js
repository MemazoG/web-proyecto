const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const Admin = require('../models/admin')
var app = express()
// const verify = require("../middleware/verifyAccess")
// const bcrypt = require('bcrypt')
// const jwt = require("jsonwebtoken")



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
// const adminRoutes = require('./adminroutes');

// app.use('/admin', adminRoutes)

module.exports = router;