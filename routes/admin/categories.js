const init = db => {
    const router = require('express').Router()
    const categories = require('../../controllers/categories')
    router.get('/', categories.adminGetCategories(db))
    router.get('/nova', categories.adminNewCategory(db))
    router.post('/nova', categories.adminNewCategory(db))

    return router
}

module.exports = init