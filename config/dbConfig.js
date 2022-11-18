const mongoose = require('mongoose');

mongoose.connect(
    // "mongodb+srv://" + process.env.EMPLOYEES_API  + "@p14server.8czggyi.mongodb.net/ServerP14HRnet" || 
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    (err)=> {
        if(!err) console.log("Connected to MongoDB");
        else console.log("Fail to connect to MongoDB :" + err);
    }
)