const express = require('express')
const app =  express ()
const port = process.env.PORT || 3000

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

app.get('/', async(req, res) => {
const categories = await db('categories').select('*')
    res.render('home', {categories})
})

app.get('/categoria/:id', async(req, res) => {
    const products = await db('products').select('*').whereIn('id', function () {
        this
            .select('categories_products.product_id')
            .from('categories_products')
            .where('category_id', req.params.id)
    })
    res.send(products)
})

app.listen(port, (err) => {
    if(err){
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('DevShop server online...') 
    }    
})