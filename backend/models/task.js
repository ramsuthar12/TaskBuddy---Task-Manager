const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    important: {
        type: Boolean,
        default: false,
    },
    complete: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("Task", taskSchema);