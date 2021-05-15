const express = require("express");

const app = express();

const mongoose = require('mongoose');


require('dotenv/config');

const restoRoute = require('./routes/restaurants');

//import routes
app.use(require('body-parser').json());
app.use('/restaurants', restoRoute);


//Routes 
app.get('/', (req, res)=>{
    res.send("we r on home");
});

//connect to DB mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err)=>{
    if(!err){
        console.log('connected to db');
    }
});

app.listen(3000);