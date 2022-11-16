const express = require('express')//import du paquet express
require('dotenv').config({path:'./config/.env'})
require('./config/dbConfig')
const employeesRoutes = require('./routes/employeesController')
const bodyParser = require('body-parser')
const cors = require('cors')

//create express application
const app = express()

const corsOptions={
    origin:'*',
    'methods':'GET, POST, DELETE',
    'preflightContinue': false
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors(corsOptions))// give external access
app.use('/employees', employeesRoutes)// '/' = url/employees


//start the server and listen the given port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})




