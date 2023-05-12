const express = require('express')
const router = express.Router()

const path = require('path')
const productsControlle = require('../controllers/products')

router.get('/', productsControlle.getProducts)

module.exports = router