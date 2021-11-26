const express = require('express');
const router = express.Router()
const Product = require('../models/product')
const Admin = require('../models/admin')

router.get('/', async function (req, res){
    var admins = await Admin.find()
    console.log(admins)
    res.send(admins)
})

module.exports = router;