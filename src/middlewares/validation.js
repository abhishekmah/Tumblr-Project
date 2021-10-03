
const User = require("../models/users.model")


// const checkForAlreadyRegistered = async (req, res) => {

//     const user = await User.findOne({ email: req.body.email }).lean().exec();
    
//     if (user)
//         return res.status(409).send({ status: "failed", message: "User already registered" });
 
// }

const validation = async (req, res, next) => {

    const keys = Object.keys(req.body);
    const allowedkeys = ['email', 'password', 'blog_name'];
    const isValid = allowedkeys.every((el) => keys.includes(el));
    if (!isValid)
        return res.status(400).send({ error: 'invalid format' });
    next();
}



module.exports = validation;