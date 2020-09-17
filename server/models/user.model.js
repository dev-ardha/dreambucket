const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const followerSchema = new Schema({
	followersUsernme: {
		type: String,
    },
    acc: {
        type: Boolean
    }
});

const followingSchema = new Schema({
	followingUsernme: {
		type: String,
    },
    acc: {
        type: Boolean
    }
});

const userSchema = new Schema({
    fullname: { 
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8
    },
    photo: {
        type: String,
        default: ''
    },
    social_login: {
        googleID: { type: String, default: '' },
    },
    followers: {
        type: [followerSchema],
        sparse: true
    },
    following:{
        type: [followingSchema],
        sparse: true
    }
}, {
    timestamps: true,
})

function modelAreadyDeclared() {
    try {
        const User = mongoose.model('User')
        module.exports = User// it throws an error if the model is still not defined
        return true
    } catch (e) {
        return false
    }
}

if (!modelAreadyDeclared()) {
    const User = mongoose.model('User', userSchema);
    module.exports = User;
}