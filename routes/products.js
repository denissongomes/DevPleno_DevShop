const init = db => {
    const router = require('express').Router()
    const products = require('../controllers/products')
    router.get('/produto/:id/:slug', products.getProduct(db))
    return router
}

module.exports = init
