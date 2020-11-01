const bcrypt = require('bcryptjs')

const initialUser =  db => async(id) => {
    //check if there is no users
    const count = await db('users').count('id as total')
    if(count[0].total===0){
        //create admin
        const user = {
            name: 'Admin',
            email: 'admin@devshop.com',
            passwd: 'pass',
            email_checked: true,
            roles: 'admin',
            created: new Date(),
            updated: new Date()
        }
      await db('users').insert(user)  
    }
                
     
}

module.exports = {
    initialUser
}