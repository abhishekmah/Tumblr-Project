const verifyJWT = require("./verifyJWT");

const authToken = async (req,res,next)=>{
    const bearer_token = req?.headers?.authorization;
    if (!bearer_token)
        return res.status(401).send({ status: 'failed', message: 'unauthorized user access1' });

    if (bearer_token.split(' ')[0] !== 'Bearer')
        return res.status(401).send({ status: 'failed', message: 'unauthorized user access2' });

    const token = bearer_token.split(' ')[1];

    const user = await verifyJWT(token)
    if (!user)
        return res.status(401).send({ status: 'failed', message: 'unauthorized user access3' });

        req.user = user;
        next();
}

module.exports = authToken;