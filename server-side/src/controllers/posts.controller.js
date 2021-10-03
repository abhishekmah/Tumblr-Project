const express = require('express');
const authToken = require('../middlewares/authToken');
const checkTagId = require('../middlewares/checkTagId');
const upload = require('../middlewares/uploadProfile');
const Post = require('../models/posts.model');
const User = require('../models/users.model');


const app = express();
const router = express.Router();

app.use(express.json());

router.post('/create',upload.any('images'),authToken,checkTagId,async (req,res)=>{

    const payload = {
        ...req.body,
        tags:req.tagid,
        user_id:req.user._id,
        images:req.files
    }
    
    const post = await Post.create(payload);
   return res.status(201).json({post})
});

router.get('',authToken,async (req,res)=>{
    
   let user = await User.findById(req.user._id).lean().exec();
   
    let posts = await Post.find().sort({updatedAt: -1}).lean().populate('tags user_id').exec();
    
    if(posts.length<5){
    let admin = await User.findOne({role:'admin'}).lean().exec();
    
    let adminPosts = await Post.find({user_id:admin._id}).lean().populate('tags user_id').exec();
   
    let posts = [...posts,...adminPosts];
    
    return res.status(200).json({posts});
    }
    return res.status(200).json({posts});
})

// {$or:[{user_id:{$in:user.following}},{tags:{$in:user.interests}},{user_id:req.user._id}]}


module.exports = router