const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const config = require('.')
const cloudinary = require('cloudinary').v2;
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: config.cdn.cloud_name,
    api_key: config.cdn.api_key,
    api_secret: config.cdn.api_secret
})

const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp', 'upload'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) {
                    cb(err)
                } else {
                    
                   file.key = `${hash.toString('hex')}-${file.originalname}`

                    cb(null, file.key);
                }
            })
        }
    }),
   
    
}

module.exports = {
dest: path.resolve(__dirname, '..', '..', 'temp', 'upload'),
storage: storageTypes["local"],
limits: {
    fileSize: 5 * 1024 * 1024,
},
fileFilter: (req, file, cb)=>{
 const allowedMimes = [
     'image/jpeg',
     'image/jpg',
     'image/pjpeg',
     'image/png'
 ]
 if(allowedMimes.includes(file.mimetype)){
     cb(undefined, true)
 } else {
     cb(new Error("Invalido imagem"));
 }
}
};