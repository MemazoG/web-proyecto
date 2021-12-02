const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const Admin = require('../models/admin')
const verify = require("../middleware/verifyAccess")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

SECRET = process.env.SECRET || "mySweetSecret"

router.get('/all', async function (req, res){
    var products = await Product.find()
    console.log(products)
    console.log("HIHIH")
    res.send(products)
})

router.post('/login', async function(req, res){
    console.log(req.body)
    var {username, password} = req.body

    const admin = await Admin.findOne({username: username})

    if(!admin){
        return res.status(404).send("Admin does not exist")
    }else{
        const valid = await bcrypt.compare(password, user.password)
    }

    if(valid){
        const token = jwt.sign({id:user.email, permission: true}, process.env.SECRET, {expiresIn: "2h"})
        console.log(token)
        res.cookie("token", token, {httpOnly:true})
        res.status(200).send("Log in succesful")
    }else{
        console.log("Password is invalid")
        res.status(400).send("Invalid password")
    }
})

router.post('/newProduct', verify, async function(req, res){
    console.log(req.body)
    var product = new Product(req.body);
    await product.save()
    res.send(product);
})

router.get('/editProduct/:id', verify, async function (req, res){
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