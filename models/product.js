const getProductsByCategoryId = async(id) => {
    const products = await db('products').select('*').whereIn('id', function () {
        this
            .select('categories_products.product_id')
            .from('categories_products')
            .where('category_id', id)
    })
    return products
}