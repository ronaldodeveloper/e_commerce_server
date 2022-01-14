/*
 * **********  DATA ACCESS LAYER
*/ 

const db = require('../database/dbConnection')

const Clientes= async()=>{
      try {
          const sql= `select * from cliente`
          const {rows}= await db.query(sql)
          return rows

      } catch (error) {
          console.log('Erro ao conectar-se ao DB' + error)
      }
}

module.exports= {
    Clientes
}