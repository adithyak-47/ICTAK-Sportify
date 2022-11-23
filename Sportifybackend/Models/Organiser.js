const Mongoose = require('mongoose');

var OrganiserModel = Mongoose.model(
    "Organisers",
    new Mongoose.Schema(
        {
            user:{type:String, required:true},
            password:{type:String, required:true}
        }
    )
)

module.exports = {OrganiserModel};