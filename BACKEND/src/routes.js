const express = require('express');

const ongscontroller = require('./controllers/ongscontroller')
const incidentcontroller = require('./controllers/incidentcontroller')
const Profilecontroller = require('./controllers/Profilecontroller')


const routes = express.Router()

 
routes.get('/ongs',  ongscontroller.index )
routes.post('/ongs', ongscontroller.create)

routes.get('/incidents', incidentcontroller.index)
routes.post('/incidents', incidentcontroller.create)

routes.get('/Profile', Profilecontroller.index)


routes.delete('/incidents/:id', incidentcontroller.delete)

module.exports = routes
 