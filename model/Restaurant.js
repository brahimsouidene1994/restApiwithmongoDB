const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    adresse : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);