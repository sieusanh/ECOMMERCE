"use strict"

// verifyTokenAndAuthorization
const userOrAdminAuthorization = (req, res, next) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
        return
    } 
    res.status(403).json('You are not allowed!')
}

// verifyTokenAndAdmin
const adminAuthorization = (req, res, next) => {
    if (req.user.isAdmin) {
        next()
        return
    } 
    res.status(403).json('You are not allowed!')
}

module.exports = {
    userOrAdminAuthorization, 
    adminAuthorization
}