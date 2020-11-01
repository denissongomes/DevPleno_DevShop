const user = require('../models/user')
const login = db => async(req, res) => {
    try {
        const userFromDb = await user.login(db)(req.body.email, req.body.passwd) 
        req.session.user = userFromDb
        res.send(userFromDb)
    }catch(err){
        res.send('Error:' + err)
    }

}

module.exports = {
    login
}