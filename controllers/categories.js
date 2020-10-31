const getCategories = db => async(req, res) => {
    const products = await product.getProductsByCategoryId(db)(req.params.id)
    const cat = await category.getCategoriesById(db)(req.params.id)
    res.render('category', {
        products,
        category: cat
    })
}

module.exports = {
    getCategories
}