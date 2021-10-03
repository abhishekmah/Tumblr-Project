const express = require('express');
const authToken = require('../middlewares/authToken');
const uploadProfile = require('../middlewares/uploadProfile');
const Tag = require('../models/tags.model');


const app = express();
const router = express.Router();

app.use(express.json());

router.post('/create',authToken,uploadProfile.single('avatar'),async (req,res)=>{
     let tag = await Tag.create({tag:req.body.tag,avatar:req.file.path});
     return res.status(201).send({tag});
})


router.get('',authToken,async (req,res)=>{
    let tags = await Tag.find(req.body).lean().exec();
    return res.status(200).json({tags});
})

module.exports = router;