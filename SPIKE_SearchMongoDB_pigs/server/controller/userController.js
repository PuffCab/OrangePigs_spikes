import { v2 as cloudinary } from "cloudinary";
import userModel from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../utils/passwordServices.js";
import { generateToken } from "../utils/tokenServices.js";

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

const login = async (req, res) => {
  // console.log("login congtroller");
  console.log("req.body :>> ", req.body);
  // Check if the user exists in our database
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (!existingUser) {
      //if it doesn't send appropiate response to the client
      res.status(404).json({
        msg: "no user found with this email",
      });
    } else {
      // if user exists in our DB
      // Check password
      try {
        const checkPassword = await verifyPassword(
          req.body.password,
          existingUser.password
        );
        if (!checkPassword) {
          //this means received password do not match the one in the DB
          res.status(404).json({
            msg: "Wrong password, try again",
          });
        }
        if (checkPassword) {
          // email exists in our DB, and password is correct
          //Generate token
          const token = generateToken(existingUser._id);
          if (token) {
            //all is oK: email exists, password is correct, and token is generated

            res.status(200).json({
              msg: "login success",
              user: {
                userName: existingUser.userName,
                email: existingUser.email,
                userImage: existingUser.userImage,
              },
              token,
            });
          } else {
            console.log("error generating token");
            res.status(400).json({
              msg: "something went wrong with your request",
            });
          }

          // res.status(200).json({
          //   msg: "you are logged  in",
          // });
        }
      } catch (error) {
        console.log("error checking password".bgYellow, error);
      }
    }
  } catch (error) {
    res.status(500).json({
      msg: "I don't have a clue",
    });
  }
};

const getProfile = async (req, res) => {
  console.log("get profile".bgBlue);
  console.log("req.user :>> ".rainbow, req.user);
  if (req.user) {
    res.status(200).json({
      user: {
        userName: req.user.userName,
        email: req.user.email,
        userImage: req.user.userImage,
      },
    });
  }
  if (!req.user) {
    res.status(200).json({
      msg: "you need to login again",
    });
  }
};
export { uploadImage, register, login, getProfile };
