
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {userOrAdminAuthorization, adminAuthorization} = require('../middlewares/Authorization')
const {createCart, updateCart, deleteCart, 
    getUserOfCart, getAllCart} = require('../controllers/cartController')

// CREATE
router.post('/', userAuthentication, createCart)

// UPDATE
router.put('/:id', userAuthentication, userOrAdminAuthorization, updateCart)

// DELETE
router.delete('/:id', userAuthentication, adminAuthorization, deleteCart)

// GET USER CART
router.get('/find/:userId', userAuthentication, userOrAdminAuthorization, getUserOfCart)

// GET ALL CART
router.get('/', userAuthentication, adminAuthorization, getAllCart)

module.exports = router