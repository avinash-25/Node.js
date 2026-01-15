import multer from "multer";

//! disk storage

const myStorage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "----" + file.originalname);
    }, //? in your server, this will be the name of the file
    
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); //? this folder should be present the directory (should be relative to the main file)
  }, //? in your server, this will be the path of the file
});

const upload = multer({ storage: myStorage });

//! Using memory

// const myStorage = multer.memoryStorage();
// const upload = multer({ storage: myStorage });

export default upload;

//! if frontend form, use attribute enctype=multipart/form-data