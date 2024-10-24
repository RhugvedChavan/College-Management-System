import express from 'express';
import { enrollInCourse, submitAssignment } from '../controllers/student.controllers.js';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware.js';

const router = express.Router();


router.post('/enroll/:courseId', authenticateToken, authorizeRoles('student'), enrollInCourse)

router.post('/submit-assignment/:courseId/:assignmentId', authenticateToken, authorizeRoles('student'), submitAssignment)

export default router