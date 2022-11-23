const Mongoose = require("mongoose");

var EventsModel = new Mongoose.model(
    "Events",
    new Mongoose.Schema(
        {
            event: {type:String, required:true}
        }
    )
)

module.exports = {EventsModel};