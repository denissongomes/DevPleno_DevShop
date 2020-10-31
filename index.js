const express = require('express')
const app =  express ()
const port = process.env.PORT || 3000
const category = require('./models/category.js')
const product = require('./models/product.js')

const categories = require('./controllers/categories.js')
const products = require('./controllers/products.js')

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'devshop'
    }
})

db.on('query', query => {
    console.log('SQL: ', query.sql)
})

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

app.get('/', async(req, res) => {
    res.render('home')
})


app.get('/categoria/:id/:slug', categories.getCategories(db))

app.get('/produto/:id/:slug', products.getProduct(db))

app.listen(port, (err) => {
    if(err){
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('DevShop server online...') 
    }    
})