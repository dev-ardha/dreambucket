const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dreamSchema = new Schema({
    title: { 
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    achieved: {
        type: Boolean,
        default: false
    },
    images: {
        type: String,
        default: ""
    },
    dreamer: {
        type:Schema.Types.ObjectId,
        ref:'User'
    }
}, {
    timestamps: true,
})

function modelAreadyDeclared() {
    try {
        const Dream = mongoose.model('Dream')
        module.exports = Dream// it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const Dream = mongoose.model('Dream', dreamSchema);
    module.exports = Dream;
}