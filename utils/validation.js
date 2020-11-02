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
