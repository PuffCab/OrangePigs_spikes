import { v2 as cloudinary } from "cloudinary";
import userModel from "../models/userModel.js";
import { hashPassword } from "../utils/hashPassword.js";

const uploadImage = async (req, res) => {
  console.log("req.file :>> ", req.file);

  if (req.file) {
    // if there is a field called "file" in the request, we trz to upload file to cloudinary
    try {
      const uploadedImage = await cloudinary.uploader.upload(req.file.path, {
        folder: "travelApp",
      });
      console.log("uploadedImage :>> ", uploadedImage);
      res.status(200).json({
        message: "image uploaded succesfully",
        userImage: uploadedImage.secure_url,
      });
      // if uploadedImage is succesful (returns a valid object) , save that URL into the user collection
    } catch (error) {
      console.log("error :>> ", error);
    }
  } else {
    res.status(500).json({
      error: "file type not supported",
    });
  }
};

const register = async (req, res) => {
  //recieve all the newUser information (sent by the client) in the body of the request
  //process that informaton and store in the database
  console.log("req.body :>> ", req.body);
  // const {userName, email,userImage, password }=req.body // destructured version

  // Hash user password

  try {
    const hashedPassword = await hashPassword(req.body.password);
    if (hashedPassword) {
      //check if user exist already

      const existingUser = await userModel.findOne({ email: req.body.email });

      if (existingUser) {
        res.status(200).json({
          message: "email already exist in the database",
        });
      } else {
        //if no existing user, we save the new user
        try {
          const newUser = new userModel({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
            userImage: req.body.userImage,
          });

          const savedUser = await newUser.save();
          res.status(201).json({
            msg: "new user registered",
            user: {
              userName: savedUser.userName,
              email: savedUser.email,
              userImage: savedUser.userImage,
            },
          });
        } catch (error) {
          console.log("error saving user :>> ", error);
          res.status(500).json({
            msg: "something went wrong registering the user",
          });
        }
      }
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({
      msg: "something went wrong",
    });
  }
};

export { uploadImage, register };
