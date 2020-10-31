const product = require('../models/product.js')

const getProduct = db => async(req,res) =>{
    const prod = await product.getProductsById(db)(req.params.id)
    res.render('product-detail', {
        product: prod
        
    })
    
}

module.exports = {
    getProduct
}