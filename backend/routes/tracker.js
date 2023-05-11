const express = require('express')
const router = express.Router()

const path = require('path')
const rootDir = require('../util/path')

const adminData = require('./admin')


router.get('/tracker', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'tracker.html'))
})


module.exports = router