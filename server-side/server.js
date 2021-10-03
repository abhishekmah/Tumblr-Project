const express = require('express');
const connect = require('./src/configs/db');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const userController = require('./src/controllers/users.controller');
const tagController = require('./src/controllers/tags.controller');
const postController = require('./src/controllers/posts.controller');
const commentController = require('./src/controllers/comment.controller');

app.use('/users',userController);
app.use('/tags',tagController);
app.use('/posts',postController);
app.use('/comments',commentController);

app.listen(process.env.PORT || 5000,async ()=>{
    const state = await connect;
    console.log('listening to the port')
})