const extractErrors = error => {
    return error.details.reduce((prev, curr) => {
        if(prev[curr.path[0]]){
            prev[curr.path[0]].push(curr.type)
        } else {
            prev[curr.path[0]] = [curr.type]
        }
        return prev
    }, {})     
    

}

const validate = (obj, schema) => {
    const { err, value } = Joy.validate(category, createSchema, { abortEarly: false, stripUnknown: true })
    if(error){
        throw new Error({message: 'validation', errors: extractErrors(error)})
    }
}