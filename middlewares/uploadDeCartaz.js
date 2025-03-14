const multer = require('multer');

const storage = multer.diskStorage(
    {
        destination: (req, file, cb)=>{
            cb(null, __dirname + "/../public/img");
        },
        filename: (req, file, cb)=>{
            cb(null, `${Date.now()}-${file.fieldname}`);
        }
    }
)

const middleware = multer({storage}).single("cartaz");

module.exports = middleware;