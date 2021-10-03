const express = require('express');
const jwt = require('jsonwebtoken');
const authToken = require('../middlewares/authToken');
const env = require('dotenv').config();
const checkForAlreadyRegistered = require('../middlewares/checkForAlreadyRegistered');
const validation = require('../middlewares/validation');
const verifyJWT = require('../middlewares/verifyJWT');
const Post = require('../models/posts.model');
const User = require('../models/users.model');

const app = express();
const router = express.Router();

app.use(express.json());

router.get('/test',async (req,res)=>{
    return res.status(200).send('heroku deployed')
})

//get curr user
router.get('/curruser', authToken, async (req, res) => {

    let user = await User.findById(req.user._id).lean().exec();
    return res.status(200).json({ user });
})

//get  users
router.get('', authToken, async (req, res) => {

    let users = await User.aggregate([{ $sort : { followers : -1} }]).limit(5).exec();
    return res.status(200).json({ users });
})


//register
router.post('/register', validation, checkForAlreadyRegistered, async (req, res) => {

    const user = await User.create(req.body);
    const token = await jwt.sign(user.toObject(), process.env.JSON_SECRET_KEY);
    return res.status(201).json({ status: 'success', user, token });
});

//login
router.post('/login', validation, async (req, res) => {

    const user = await User.findOne({ email: req.body.email }).lean().exec();
    if (!user)
        return res.status(404).send({ status: 'failed', message: 'user not found' });
    if (req.body.password !== user.password)
        return res.status(403).send({ status: 'failed', message: 'invalid credentials' });
    const token = await jwt.sign(user, process.env.JSON_SECRET_KEY);
    return res.status(201).json({ user, token });
});

//userdetails
router.post('/userdetail', authToken, async (req, res) => {

    const user = req.user;

    User.findById(user._id, function (err, payload) {
        if (err)
            return res.status(403).send({ message: err._message });
        payload.interests = req.body.interests;
        payload.save(function (err) {
            if (err)
                return res.status(403).send({ message: err._message })
            else
                return res.status(201).send({ status: 'success' })
        })


    })


})

router.post('/follow/:follow_id/', authToken, (req, res) => {

    User.findById(req.params.follow_id, function (err, followedUser) {
        if (err)
            return res.status(404).json({ status: 'failed', message: "user not found" });

        followedUser.followers.push(req.user._id);
        followedUser.save(function (err) {
            if (err)
                return res.status(404).json({ status: 'failed', message: "user not found" });
            User.findById(req.user._id, function (err, followingUser) {
                followingUser.following.push(followedUser._id);
                followingUser.save(function (err) {
                    if (err)
                        return res.status(404).json({ status: 'failed', message: "user not found" });
                    else
                        return res.status(200).json({ status: 'success', user: followingUser });
                })
            })
        })

    })
})



router.post('/unfollow/:unfollow_id/', authToken, (req, res) => {

    User.findById(req.params.unfollow_id, function (err, followedUser) {
        if (err)
            return res.status(404).json({ status: 'failed', message: "user not found" });
        followedUser.followers = followedUser.followers.filter(id => (id !== null && id.toString() !== req.user._id.toString()));


        followedUser.save(function (err) {
            if (err)
                return res.status(404).json({ status: 'failed', message: "user not found" });
            User.findById(req.user._id, function (err, followingUser) {

                followingUser.following = followingUser.following.filter(id => (id !== null && id.toString() !== followedUser._id.toString()));

                followingUser.save(function (err) {
                    if (err)
                        return res.status(404).json({ status: 'failed', message: "user not found" });
                    else
                        return res.status(200).json({ status: 'success', user: followingUser });
                })
            })
        })

    })
})


router.post('/like/:post_id', authToken, async (req, res) => {
    Post.findById(req.params.post_id, function (err, post) {
        if (err)
            return res.status(404).json({ status: 'failed', message: "post not found" });
        post.likedby.push(req.user._id);
        post.save(function (err) {
            if (err)
                return res.status(404).json({ status: 'failed', message: "post not updated" });
            User.findById(req.user._id, function (err, user) {
                if (err)
                    return res.status(404).json({ status: 'failed', message: "user not found" });
                user.likes.push(req.params.post_id);
                user.save(function (err) {
                    if (err)
                        return res.status(404).json({ status: 'failed', message: "user not updated" });
                    else
                        return res.status(200).json({ status: 'success', user })
                })
            })
        })
    })
})


router.post('/unlike/:post_id', authToken, async (req, res) => {
    Post.findById(req.params.post_id, function (err, post) {
        if (err)
            return res.status(404).json({ status: 'failed', message: "post not found" });
        post.likedby = post.likedby.filter(id => (id !== null && id.toString() !== req.user._id.toString()));

        post.save(function (err) {
            if (err)
                return res.status(404).json({ status: 'failed', message: "post not updated" });
            User.findById(req.user._id, function (err, user) {
                if (err)
                    return res.status(404).json({ status: 'failed', message: "user not found" });
                user.likes = user.likes.filter(id => (id !== null && id.toString() !== req.params.post_id.toString()));

                user.save(function (err) {
                    if (err)
                        return res.status(404).json({ status: 'failed', message: "user not updated" });
                    else
                        return res.status(200).json({ status: 'success', user })
                })
            })
        })
    })
})


module.exports = router;
