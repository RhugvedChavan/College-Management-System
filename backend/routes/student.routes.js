import express from 'express';
import { enrolledCourses, enrollInCourse, submitAssignment } from '../controllers/student.controllers.js';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware.js';

const router = express.Router();


router.post('/enroll/:courseId/:studentId', authenticateToken, authorizeRoles('student'), enrollInCourse)
router.get('/enrolled-courses/:studentId', authenticateToken, authorizeRoles('student'), enrolledCourses)

router.post('/submit-assignment/:courseId/:assignmentId', authenticateToken, authorizeRoles('student'), submitAssignment)

export default router