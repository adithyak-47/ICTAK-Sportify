const Mongoose = require('mongoose');

var CaptainModel = Mongoose.model(
    "Captains",
    new Mongoose.Schema(
        {
            user:{type:String, required:true},
            password:{type:String, required:true},
            house:{type:String, required:true},
        }
    )
)

module.exports = {CaptainModel};