import express from "express"
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware.js"
import { createNotice, createUser, deleteNotices, deleteUsers, getAllUsers, getNotices, getStudents, getTeachers } from "../controllers/admin.controllers.js"

const router = express.Router()

router.post('/create-users', authenticateToken, authorizeRoles('admin'), createUser)
router.get('/all-users', authenticateToken, authorizeRoles('admin'), getAllUsers)
router.get('/students', authenticateToken, authorizeRoles('admin'), getStudents)
router.get('/teachers', authenticateToken, authorizeRoles('admin'), getTeachers)
router.delete('/delete-user/:userId', authenticateToken, authorizeRoles('admin'), deleteUsers)
router.post('/post-notice', authenticateToken, authorizeRoles('admin'), createNotice)
router.get('/admin-posted-notices', getNotices)
router.delete('/delete-admin-notice/:noticeId', authenticateToken, authorizeRoles('admin'), deleteNotices)


export default router