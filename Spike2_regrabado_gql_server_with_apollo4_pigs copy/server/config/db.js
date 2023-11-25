import mongoose from "mongoose";

const connectDB = async () => {
  //   console.log("process.env.MONGO_URI :>> ", process.env.MONGO_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI3);
    console.log(`Connected to MongoDB : ${connection.connection.host}`.bgBlue);
  } catch (error) {
    console.log("error :>> ".bgRed, error);
    throw new Error("Cannot connect to MongoDB");
  }
};

export default connectDB;
