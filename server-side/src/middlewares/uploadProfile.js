const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,'./src/uploads')
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, file.fieldname + '-' + uniqueSuffix)
      }
})



module.exports = multer({
    storage:storage,
    limits:{fieldSize:1024*1024*5}
})