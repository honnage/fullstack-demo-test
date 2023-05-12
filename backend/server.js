const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const trackerRouter = require('./routes/tracker')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views/pug')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRouter.routes)
app.use(shopRouter)
app.use(trackerRouter)

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3033)
console.log('Server is running port 3033')