const mongoose = require('mongoose');

//connect to mongodb atlas
mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true}, 
    (err)=> {
        if(!err) console.log("Connected to MongoDB");
        else console.log("Fail to connect to MongoDB :" + err);
    }
)