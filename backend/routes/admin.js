const express = require('express')
const router = express.Router()

const path = require('path')
const rootDit = require('../util/path')

const products = []

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDit, 'views', 'add-product.html'))
  })

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.routes = router
exports.products = products