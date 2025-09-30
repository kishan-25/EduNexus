import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";

import userRoutes from "./routes/User.js";
import profileRoutes from "./routes/Profile.js";
import paymentRoutes from "./routes/Payments.js";
import courseRoutes from "./routes/Course.js";

import connect  from "./config/database.js";
import { cloudinaryConnect } from "./config/cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
connect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://edunexus-ib1k2dgy5-kishan-25s-projects.vercel.app",
      "https://edunexus-eight.vercel.app",
      "https://edunexus-9f0c.onrender.com",
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp" }));
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/course", courseRoutes);

// Default route
app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Your server is up and running...",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at port ${PORT}`);
});
