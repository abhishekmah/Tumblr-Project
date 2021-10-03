const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    tag:{type:String,required:true},
    avatar:{type:String,default:null},
    followers:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    featured:{type:Boolean,default:false}
},{
    timestamps:true,
    versionKey:false
});

const Tag = mongoose.model('tag',tagSchema);

module.exports=Tag;