const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  });

  function fileFilter (req, file, cb) {

    if(file.mimetype==="image/png" || file.mimetype==="jpg"){
        cb(null,true)
    }
    else{
        cd(null,false)
    }
  
  }

module.exports = multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5,
    },
    fileFilter:fileFilter,
})