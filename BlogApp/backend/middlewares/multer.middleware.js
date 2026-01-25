import multer from "multer";
import ErrorResponse from "../utils/ErrorResponse.util.js";

// Configure storage settings for uploaded files
// const storage = multer.diskStorage({
  // Define how files should be named when saved
//   filename: (req, file, callback) => {
//     const timestamp = Date.now();
//     const uniqueFilename = `${timestamp}----${file.originalname}`;
//     callback(null, uniqueFilename);
//   },

  // Define where files should be saved
//   destination: (req, file, callback) => {
//     const uploadPath = "./public/temp";
//     callback(null, uploadPath);
//   }
// });

const myStorage = multer.memoryStorage();

// Validate file types before upload
const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

  const isValidFileType = allowedMimeTypes.includes(file.mimetype);

  if (isValidFileType) {
    callback(null, true);
  }
  else
  {
    const error = new ErrorResponse("Only image files with extensions .jpg, .jpeg, .png, .gif are allowed", 400);
    callback(error, false);
  }
};

// Configure multer with storage, validation, and size limits
const upload = multer({
  storage: myStorage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1 * 1024 * 1024, // 1MB maximum file size
  }
});

export default upload;

// NOTE: When using this uploader, ensure your HTML form includes:
// <form enctype="multipart/form-data">