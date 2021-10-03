const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    blog_name: { type: String, required: true },
    avatar: { type: String },
    age: { type: Number },
    bio: { type: String },
    role:{type:String},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:'post'}],
    interests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tag' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('user', userSchema);

module.exports = User;