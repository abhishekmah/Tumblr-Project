const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment:{type:String,required:true},
    post_id:{type:mongoose.Schema.Types.ObjectId,ref:'post',required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},

},{
    timestamps:true,
    versionKey:false
});

const Comment = mongoose.model('comment',commentSchema);

module.exports = Comment;