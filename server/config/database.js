import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ MongoDB connected successfully");
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed");
      console.error(err);
      process.exit(1);
    });
};

export default connect;
