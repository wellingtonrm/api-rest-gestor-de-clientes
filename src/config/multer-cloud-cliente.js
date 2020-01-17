const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const config = require('.')
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: config.cdn.cloud_name,
    api_key: config.cdn.api_key,
    api_secret: config.cdn.api_secret

})

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'clientes',
    allowedFormats: ['jpg', 'png', 'jpeg', 'pjpeg', 'webp'],
    transformation: [{ width: 200, height: 200, crop: 'limit' }],
    filename: function (req, file, cb) {
        crypto.randomBytes(16, (err, hash) => {
            if (err) {
               
                
                cb(err)
            } else {

                file.key = `${hash.toString('hex')}-${file.originalname}`
                const {key} = file
              
               cb(null, key);
            }
        })
    }
});

const parser = multer({ storage });
module.exports = parser;