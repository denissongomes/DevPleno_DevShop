const router = require('express').Router()

router.get('/categoria/:id/:slug', categories.getCategories(db))

module.exports = router
