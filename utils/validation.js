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

const ValidationError = (message, errors) => ({
    message,
    errors
})

const validate = (obj, schema) => {
    const { err, value } = Joy.validate(obj, schema, { abortEarly: false, stripUnknown: true })
    if(error){
        throw ValidationError('validation', extractErrors(error))
    }else{
        return value
    }
}

module.exports = {
    extractErrors, 
    validate
}