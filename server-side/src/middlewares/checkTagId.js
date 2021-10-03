const Tag = require("../models/tags.model");

const findOrCreate = (tag) => new Promise((resolve, reject) => {
    Tag.findOne({
        tag
    })
        .then((hashtag) => {
            if (!hashtag) {
                new Tag({
                    tag
                }).save()
                    .then(hashtag => resolve(hashtag._id))
                    .catch(err => reject(err));
            } else {
                hashtag.save()
                    .then(hashtag => resolve(hashtag._id))
                    .catch(err => reject(err));
            }
        })
        .catch(err => reject(err));
})


const checkTagId = async (req, res, next) => {
    
    const tag_names = req.body.tags;

    if (!tag_names) {
        req.tagid = []
        next()
    }
    
    let promiseArr;
    if(typeof tag_names=='string'){
    promiseArr = findOrCreate(tag_names);
    promiseArr.then(results => results).then((results) => { req.tagid = [results]; next() })
    .catch(err => {
        throw err
    });
    }
    else{
    promiseArr = tag_names.map((hashtagTitle) =>
        findOrCreate(hashtagTitle)
    );
    Promise.all(promiseArr)
        .then(results => results).then((results) => { req.tagid = results; next() })
        .catch(err => {
            throw err
        });
    }
}

module.exports = checkTagId;