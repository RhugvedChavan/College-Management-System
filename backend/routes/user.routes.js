import express from 'express';
import { handleRegister, handleLogin, handleLogout } from '../controllers/auth.controllers.js';
import { authenticateToken, authorizeRoles } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public routes
router.post('/register', handleRegister);
router.post('/login', handleLogin);
router.post('/logout', authenticateToken, handleLogout);

// Protected routes
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: "Profile accessed", user: req.user });
});

// Student routes
router.get('/courses', authenticateToken, authorizeRoles('student', 'teacher', 'admin'), (req, res) => {
  res.json({ message: "Courses list" });
});

// Teacher routes
router.post('/grades', authenticateToken, authorizeRoles('teacher', 'admin'), (req, res) => {
  res.json({ message: "Grades submitted" });
});

// Admin routes
router.get('/users', authenticateToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: "Users list" });
});

export default router;