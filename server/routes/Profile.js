import express from "express";
import { 
  updateProfile, 
  deleteAccount, 
  getAllUsers, 
  getUserDetails, 
  getEnrolledCourses, 
  instructorDetails 
} from "../controllers/Profile.js";

const router = express.Router();

router.post("/updateProfile", updateProfile);
router.post("/deleteAccount", deleteAccount);
router.get("/getEnrolledCourses", getEnrolledCourses);
router.get("/getAllUsers", getAllUsers);
router.get("/getUserDetails", getUserDetails);
router.get("/instructorDashboard", instructorDetails);

export default router;
