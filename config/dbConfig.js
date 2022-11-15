const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://" + process.env.EMPLOYEES_API,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err)=> {
        if(!err) console.log("Connected to MongoDB");
        else console.log("Fail to connect to MongoDB :" + err);
    }
)