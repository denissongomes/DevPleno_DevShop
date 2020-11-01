const init = db => {
    const express = require('express')
    const app =  express ()

    const category = require('./models/category')
    const routes = require('./routes')
    const bodyParser = require('body-parser')
    const session = require('express-session')
   
    app.use(bodyParser.json({ extended: true}))
    app.use(bodyParser.urlencoded())
    app.set('view engine', 'ejs')
    app.use(express.static('public'))

    //middleware
    app.use(async(req, res, next) => {
        const categories = await category.getCategories(db)()
        res.locals = {
            categories
        }
        next()
    })
    app.use(routes(db))
    return app
}

module.exports = init