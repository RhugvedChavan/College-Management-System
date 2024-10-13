import express from "express"
import { authenticateToken, authorizeRoles } from "../middlewares/auth.middleware.js"
import { createUser, deleteUsers, getAllUsers, getStudents, getTeachers } from "../controllers/admin.controllers.js"

const router = express.Router()

router.post('/create-users', authenticateToken, authorizeRoles('admin'), createUser)
router.get('/all-users', authenticateToken, authorizeRoles('admin'), getAllUsers)
router.get('/students', authenticateToken, authorizeRoles('admin'), getStudents)
router.get('/teachers', authenticateToken, authorizeRoles('admin'), getTeachers)
router.delete('/delete-user/:userId', authenticateToken, authorizeRoles('admin'), deleteUsers)


export default router