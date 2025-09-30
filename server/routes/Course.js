import express from "express";
import { createCategory, findAllCategory, categoryPageDetails } from "../controllers/Category.js";
import { 
  createCourse, 
  showAllCourses, 
  getCourseDetails, 
  editCourse, 
  getInstructorCourses, 
  deleteCourse, 
  updateCourseProgress 
} from "../controllers/Course.js";
// import { auth, isAdmin, isStudent, isInstructor } from "../middlewares/auth.js";
import { createSection, updateSection, deleteSection } from "../controllers/Section.js";
import { createSubSection, deleteSubSection, updateSubSection } from "../controllers/Subsection.js";
import { createRating, getAverageRating, getAllReviews } from "../controllers/RatingAndReview.js";

const router = express.Router();

// course
router.post("/editCourse", editCourse);
router.post("/updateCourseProgress", updateCourseProgress);
router.post("/createCourse", createCourse);
router.post("/deleteCourse", deleteCourse);
router.get("/showAllCourses", showAllCourses);
router.get("/getInstructorCourses", getInstructorCourses);
router.post("/getFullCourseDetails", getCourseDetails);

// section
router.post("/createSection", createSection);
router.post("/updateSection", updateSection);
router.post("/deleteSection", deleteSection);

// sub-section
router.post("/addSubSection", createSubSection);
router.post("/deleteSubSection", deleteSubSection);
router.post("/updateSubSection", updateSubSection);

// category
router.post("/createCategory", /* auth, isAdmin, */ createCategory);
router.get("/showAllCategories", findAllCategory);
router.post("/getCategoryPageDetails", categoryPageDetails);

// review and rating
router.post("/createRating", /* auth, isStudent, */ createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllReviews);

export default router;
