import multer from "multer";
import path from "path";

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  // logic to decide if we accept the file the user is uploading or not.
  // criteria : the type of file
  //   console.log("file :>>>>>> ", file);

  const extension = path.extname(file.originalname);
  //   console.log("extension :>> ", extension);
  if (extension !== ".png" && extension !== ".jpg" && extension !== ".jpeg") {
    // extension not accepted, we don't accept the upload

    cb(null, false);
  } else {
    // To accept the file pass `true`, like so:
    cb(null, true);
  }
};

const multerUpload = multer({ storage, fileFilter });

export default multerUpload;
