const slug = require('../utils/slug')
const Joi = require('@hapi/joi')

const createSchema = Joi.object().keys({
    categories: Joi.string().min(5).max(245).required(),
    description: Joi.string().min(5).required()
})

const getCategoriesById = db => async(id) => {
    const category = await db('categories')
                            .select('*')
                            .where('id', id)
    return category
}

const getCategories = db => async() => {
    const categories = await db('categories').select('*')
    const categoriesWithSlug = categories.map( category => {
    const newCategory = { ...category, slug: slug(category.category) }
    return newCategory
})
return categoriesWithSlug
}

const createCategory = db => async(category) => {
   const { err, value } = Joy.validate(category, createSchema, { abortEarly: false, stripUnknown: true })
   if(error){
       throw new Error({message: 'validation', errors: extractErrors(error)})
   } else {
       await db('categories').insert(value)
   }
    
}

module.exports = {
    getCategories,
    getCategoriesById,
    createCategory
}