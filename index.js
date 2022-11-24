const express = require('express')//import du paquet express
require('dotenv').config({path:'.env'})
require('./config/dbConfig')
const employeesRoutes = require('./routes/employeesController')
const cors = require('cors')

//create express application
const app = express()

//cors
const corsOptions={
    'origin':'*',
    'methods':'GET, POST, DELETE',
    'preflightContinue': false
}

//middlewares
app.use(express.json())
app.use(cors(corsOptions))// give external access
app.use(express.urlencoded({extended:true}))
app.use('/employees', employeesRoutes)// '/' = url/employees


//home
app.get('/', (_req, res) => {
    res.send("Hello World !!");
})


//start the server and listen the given port
const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})




