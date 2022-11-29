const express = require("express")
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const { EmployeeModel }= require("../models/employeeModel")


// get employees route
router.get('/', (req, res) => {
    EmployeeModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :" + err)
    })
})


//post employee route
router.post('/', async(req, res) => {
    console.log(req.body)
    const newEmployee = await new EmployeeModel({
        ...req.body   
    })

    newEmployee.save((err, docs)=>{
        if(!err) res.send(docs);
        else console.log("Error to create new data :" + err)
    })
})


//delete route
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("ID unknown :" + req.params.id)

    EmployeeModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Error to delete a data :" + err)
        }
    )
})


module.exports = router