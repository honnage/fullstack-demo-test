const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const trackerRouter = require('./routes/tracker')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRouter.routes)
app.use(shopRouter)
app.use(trackerRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3033)
console.log('Server is running port 3033')