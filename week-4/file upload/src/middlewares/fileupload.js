const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null,uniquePrefix+"-"+file.originalname )
    }
  })


  function fileFilter (req, file, callback) {

    if(file.mimetype==="image/png" || file.mimetype==="jpg"){
        callback(null, true)
    }else{
        callback(null, false)
    }
 
  }

module.exports = multer({
    storage:storage,
    limits:{
        fileSize:1024 * 1024 *5,

    },
    fileFilter: fileFilter,  
});