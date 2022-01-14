/*
 * ********** POSTGRES DATABASE CONNECTION   
*/ 

const { Pool } = require('pg')

const db= new Pool({
    host : 'localhost',
    user : 'postgres',
    password : 'usuario83',
    database : 'e_commerce',
    port : 5432
})



module.exports = {
    query: (text, params, callback)=>{
        return db.query(text, params, callback)
    }
}