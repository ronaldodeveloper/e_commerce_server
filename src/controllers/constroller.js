
/*
 **************** CONTROLLERS LAYERS ***********
                adapters the interface
*/


const { Clientes }= require('../models/repositories/data-access')
const { Services }= require('../services/services')

// data-acces
const Controller= async (req, res)=>{

    const clientesResponse= await Clientes()
    res.json(clientesResponse)
}


// services
const ServicesLayer= (req, res)=>{
    res.json(Services())
}
 
module.exports= {
    Controller,
    ServicesLayer
}