
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {adminAuthorization} = require('../middlewares/Authorization')
const {createProduct, updateProduct, deleteProduct, 
    getProductById, getAllProduct} = require('../controllers/productController')

router.get('/product-list', (req, res) => res.render('product'))
router.post('/product-list', userAuthentication)

// CREATE
router.get('/create', (req, res) => res.render('create_product'))
router.post('/create', userAuthentication, adminAuthorization, createProduct)

// UPDATE
router.put('/:id', userAuthentication, adminAuthorization, updateProduct)

// DELETE
router.delete('/:id', userAuthentication, adminAuthorization, deleteProduct)

// GET PRODUCT
router.get('/find/:id', getProductById)

// GET ALL PRODUCTS
router.get('/', getAllProduct)

module.exports = router