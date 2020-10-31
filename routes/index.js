const init = db => {
    const categories = require('./categories')
    const products = require('./products')
    const router = require('express').Router()
    router.use(categories(db))
    router.use(products(db))
    return router
}

module.exports = {
    init
}