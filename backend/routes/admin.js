const express = require('express')
const router = express.Router()

const path = require('path')
const rootDit = require('../util/path')

const products = []

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDit, 'views', 'add-product.html'))
  // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true })
})


router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

exports.routes = router
exports.products = products