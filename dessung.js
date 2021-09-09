const mongoose = require("mongoose");

const desuungSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    registeredOn: {
        type: Date,
        default: new Date(),
    },
    });

const desuungModel = mongoose.model("desuungModel", desuungSchema);
module.exports = desuungModel;