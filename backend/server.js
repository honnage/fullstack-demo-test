const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const trackerRoutes = require('./routes/tracker')

const errorController = require('./controllers/error');

const sequelize = require('./util/database')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(trackerRoutes)
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3033)

sequelize
.sync()
.then(result => {
    console.log('Server is running on port 3033')
    console.log('Connect database success !!')
})
.catch(err => {
    console.log('Connect database fail !', err)
})