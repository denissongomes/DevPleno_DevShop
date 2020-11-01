const bcrypt = require('bcryptjs')

const generatedPassHash = passwd => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(passwd, salt)
    return hash
}

const initialUser =  db => async(id) => {
    //check if there is no users
    const count = await db('users').count('id as total')
    if(count[0].total===0){
        //create admin
        const user = {
            name: 'Admin',
            email: 'admin@devshop.com',
            passwd: generatedPassHash('admin'),
            email_checked: true,
            roles: 'admin, financial, customer',
            created: new Date(),
            updated: new Date()
        }
      await db('users').insert(user)  
    }
                
     
}

const login = db => async(email, passwd) => {
    const user =  await db('users').select('*').where('email',email)
   if (user.length === 0){
       throw new Error('Invalid user.')
   }
    return user

}

module.exports = {
    initialUser, 
    login
}