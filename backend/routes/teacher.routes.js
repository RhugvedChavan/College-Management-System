import express from 'express'
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courses.controller.js';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create-course', authenticateToken, authorizeRoles('teacher'), createCourse);
router.get('/all-courses', getAllCourses);
router.get('/course-details/:courseId', getCourseById);
router.put('/update-course/:courseId', authenticateToken, authorizeRoles('teacher'), updateCourse);
router.delete('/delete-course/:courseId', authenticateToken, authorizeRoles('teacher'), deleteCourse);

export default router;
