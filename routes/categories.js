const router = require('express').Router()

app.get('/categoria/:id/:slug', categories.getCategories(db))

module.exports = router
