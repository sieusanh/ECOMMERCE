'use strict'

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')

const app = express()
dotenv.config()

// middleware
app.use(express.json())
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')

// Database Connection
mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
        console.log('Connect database successfully')
        app.listen(process.env.PORT || 8080, 'localhost', () => 
            console.log('Server is working')
        )
    })
    .catch(err => console.log(err))
    
// Routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)

// public resources
app.use('/images', express.static('images'))

app.get('/', (req, res) => res.render('home'))