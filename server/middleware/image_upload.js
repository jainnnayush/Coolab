const multer = require('multer');

// Configure Multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("image"); // 'image' should match the name attribute in the form field

// Middleware function to handle image upload
const uploadImage = (req, res, next) => {
console.log(req.body);
  upload(req, res, function (err) {
    console.log("multer here")
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(400).json({ error: 'Multer Error: ' + err.message });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(500).json({ error: 'Unknown Error: ' + err.message });
    }

    // No error occurred, file uploaded successfully.
    if (!req.file) {
      console.log("No file uplaoded");
    }

    next();
  });
};

module.exports = uploadImage;