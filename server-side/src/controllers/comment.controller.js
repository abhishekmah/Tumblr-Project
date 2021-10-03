const express = require('express');
const authToken = require('../middlewares/authToken');
const Comment = require('../models/comments.model')
const app = express();
const router = express.Router();

app.use(express.json());

router.post('',authToken,async (req,res)=>{
    let payload = {
        comment:req.body.comment,
        post_id:req.body.post_id,
        user_id:req.user._id
    };
    const comment = await Comment.create(payload);
    return res.status(201).json({comment});
})

module.exports = router;