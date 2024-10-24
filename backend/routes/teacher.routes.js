import express from 'express'
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courses.controller.js';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware.js';
import { uploadAssignments, uploadAttendance, uploadMaterals } from '../controllers/teacher.controller.js';

const router = express.Router();

router.post('/create-course', authenticateToken, authorizeRoles('teacher'), createCourse);
router.get('/all-courses', getAllCourses);
router.get('/course-details/:courseId', getCourseById);
router.put('/update-course/:courseId', authenticateToken, authorizeRoles('teacher'), updateCourse);
router.delete('/delete-course/:courseId', authenticateToken, authorizeRoles('teacher'), deleteCourse);

router.post('/upload-material/:courseId', authenticateToken, authorizeRoles('teacher'), uploadMaterals)

router.post('/create-assignment/:courseId', authenticateToken, authorizeRoles('teacher'), uploadAssignments)

router.post('/upload-attendance/:courseId', authenticateToken, authorizeRoles('teacher'), uploadAttendance)

export default router;

