/*
 **************** ROUTERS LAYERS ***********
              all application routes
*/

const router = require('express').Router();
const { Controller, ServicesLayer }= require('../controllers/constroller')

router.get('/', Controller)
router.get('/services', ServicesLayer)

module.exports={
    router
}