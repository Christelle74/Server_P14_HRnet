const express = require('express')//import du paquet express
require('dotenv').config({path:'.env'})
require('./config/dbConfig')
const employeesRoutes = require('./routes/employeesController')
const bodyParser = require('body-parser')
const cors = require('cors')

//create express application
const app = express()

const corsOptions={
    'origin':'*',
    'methods':'GET, POST, DELETE',
    'preflightContinue': false
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors(corsOptions))// give external access
app.use('/', employeesRoutes)// '/' = url/employees

app.get('/', (_req, res) => {
    res.send("Hello World !!");
})


//start the server and listen the given port
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})




