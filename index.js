const express = require('express')
const app =  express ()
const port = process.env.PORT || 3000

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        pasword: '',
        database: 'devshop'
    }
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async(req, res) => {
const categories = await db('categories').select('*')
    res.render('home', {categories})
})

app.listen(port, (err) => {
    if(err){
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('DevShop server online...') 
    }    
})