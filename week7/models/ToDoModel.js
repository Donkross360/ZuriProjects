const { Schema, model } = require('mongoose')

const todoSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        minLenght: 3
    },
},
    {timestamps: true}
)

const todoModel = model("todo", todoSchema);
module.exports = todoModel;