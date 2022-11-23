const Mongoose = require("mongoose");

var StudentModel = Mongoose.model(
    "Students",
    new Mongoose.Schema(
        {
            name:{type:String, required:true},
            house:{type:String, required: true},
            events:[String],
            pass:{type:String, required:true},
        }
    )
)

module.exports = {StudentModel};