import multer from "multer";
import ErrorResponse from "../utils/ErrorResponse.utils.js";

//! disk storage

const myStorage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
    }, //? in your server, this will be the name of the file
    
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); //? this folder should be present the directory (should be relative to the main file)
  }, //? in your server, this will be the path of the file
});

export const myFileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new ErrorResponse(
        "Only image file extension .jpg, .jpeg",
        400
      ),
      false,
    );
  }
};





export const upload = multer({ storage: myStorage });

//! Using memory

// const myStorage = multer.memoryStorage();
// const upload = multer({ storage: myStorage });

//! if frontend form, use attribute enctype=multipart/form-data