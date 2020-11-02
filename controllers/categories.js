const category = require('../models/category.js')
const product = require('../models/product.js')

const getCategories = db => async(req, res) => {
    const products = await product.getProductsByCategoryId(db)(req.params.id)
    const cat = await category.getCategoriesById(db)(req.params.id)
    res.render('category', {
        products,
        category: cat
    })
}

const adminGetCategories = db => async(req, res) => {
    const categories = await category.getCategories(db)()
    res.render('admin/categories/index', { 
        categories
     })
}

const adminCreateCategory =  db => async(req, res) => {
 
    if(req.method === 'GET'){
        res.render('admin/categories/create', {
            form: {},
            errors: []
        })
    } else {
        try {
            await category.createCategory(db)(req.body)
            res.redirect('/admin/categorias')
        } catch (err) {
            res.render('admin/categories/create', {
                form: req.body,
                errors: err.errors.fields
            })
        }
    }
}

module.exports = {
    getCategories,
    adminGetCategories,
    adminCreateCategory
}