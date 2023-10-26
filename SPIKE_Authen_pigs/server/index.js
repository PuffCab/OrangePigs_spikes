import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import cors from "cors";
import * as dotenv from "dotenv";
import passport from "passport";

import cityRoutes from "./routes/cityRoutes.js";
import router from "./routes/testRoute.js";
import museumRoutes from "./routes/museumRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cloudinaryConfig from "./config/cloudinaryConfig.js";
import passportConfig from "./config/passport.js";

dotenv.config();

const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(cors());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  cloudinaryConfig();
  //3. initialize passport
  passport.initialize();
  //4. call function that loads our own setup on Passport
  passportConfig(passport);
};

const addRoutes = () => {
  app.use("/api", router);
  app.use("/api/cities", cityRoutes);
  app.use("/api/museums", museumRoutes);
  app.use("/api/users", userRoutes);
};

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DB2);
    console.log(`Connection to MONGODB stablished :>>`.bgGreen);
  } catch (error) {
    console.log("error connection to MONGODB".bgRed, error);
  }
};

const startServer = () => {
  const port = process.env.PORT || 5001;

  app.listen(port, () => {
    console.log(`Server running in port :${port}`.bgGreen);
  });
};

(async function controller() {
  await DBConnection();
  addMiddlewares();
  addRoutes();
  startServer();
})();
