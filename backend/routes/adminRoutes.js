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

router.get('/admins', async function (req, res){
    var admins = await Admin.find()
    res.send(admins)
})

router.post('/newAdmin', verify, async function (req, res){
    console.log(req.body)
    var newAdmin = new Admin(req.body)
    newAdmin.password = await bcrypt.hashSync(newAdmin.password, 10)
    console.log(newAdmin)
    await newAdmin.save()
    .then(() => res.status(200).json('New admin!'))
    .catch(err => res.status(400).json({error: 'Admin already exists with that email'}))
})

router.post('/login', async function(req, res){
    console.log(req.body)
    var {username, password} = req.body

    const admin = await Admin.findOne({username: username})

    if(!admin){
        res.status(404).json("Admin does not exist")
    }else{
        const valid = await bcrypt.compare(password, admin.password)
        if(valid){
            const token = jwt.sign({id:admin.email, permission: true}, process.env.SECRET, {expiresIn: "2h"})
            console.log("TOKEN", token)
            res.cookie("token", token, {httpOnly:true})
            res.json(admin)
        }else{
            console.log("Password is invalid")
            res.status(400).json("Invalid password")
        }
    }

    
})

router.post('/logout', async function(req, res){
    res.clearCookie("token")
    res.status(200).json("Logout")
})

router.post('/newProduct', verify, async function(req, res){
    console.log(req.body)
    var product = new Product(req.body);
    await product.save()
    .then(() => res.status(200).json('Product added'))
    .catch(err => res.status(400).json(err))
})

router.get('/editProduct/:id', verify, async function (req, res){
    var product = await Product.findById(req.params.id)
    res.send(product)
})

router.post('/editProduct/:id', verify, async function (req, res){
    var id = req.params.id
    await Product.updateOne({_id: id}, req.body)
    .then(() => res.status(200).json('Product edited'))
    .catch(err => res.status(400).json(err))
})

router.get('/delProduct/:id', verify, async function (req, res){
    var product = await Product.findById(req.params.id)
    res.send(product)
})

router.post('/delProduct/:id', verify, async function (req, res){
    var id = req.params.id
    await Product.remove({_id: id})
    .then(() => res.status(200).json('Product deleted'))
    .catch(err => res.status(400).json(err))
})

module.exports = router;