'use strict'
const router = require('express').Router()
const {userAuthentication} = require('../middlewares/Authentication')
const {userOrAdminAuthorization, adminAuthorization} = require('../middlewares/Authorization')
const {updateUserById, deleteUserById, getUserById, 
    getAllUser, getUserStats} = require('../controllers/userController')

// UPDATE
router.put('/:id', userAuthentication, userOrAdminAuthorization, updateUserById)

// DELETE
router.delete('/:id', userAuthentication, userOrAdminAuthorization, deleteUserById)

// GET
router.get('/find/:id', userAuthentication, adminAuthorization, getUserById)

// GET ALL USER
router.get('/', userAuthentication, adminAuthorization, getAllUser)

// GET USER STATS
router.get('/stats', userAuthentication, adminAuthorization, getUserStats)

module.exports = router