const express = require('express')
const app =  express ()
const port = process.env.PORT || 3000


app.listen(port, (err) => {
    if(err){
        console.log('Não foi possível iniciar o servidor')
    } else {
        console.log('DevShop server online...') 
    }    
})