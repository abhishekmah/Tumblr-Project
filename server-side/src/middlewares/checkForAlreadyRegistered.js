const User = require("../models/users.model")


const checkForAlreadyRegistered = async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email }).lean().exec();
    
    if (user)
        return res.status(409).json({ status: "failed", message: "User already registered" });
    next();
}
module.exports = checkForAlreadyRegistered