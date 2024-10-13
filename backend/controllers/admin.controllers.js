import bcrypt from 'bcryptjs';
import { User } from '../models/user.models.js'

export const createUser = async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            success: true,
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: { $in: ["student", "teacher"] } });

        if (!users || users.length === 0) {
            return res.status(404).json({
                message: "No users found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Users retrieved successfully",
            success: true,
            users: users
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to retrieve users",
            success: false
        });
    }
};


export const getTeachers = async (req, res) => {
    try {
        const user = await User.find({ role: 'teacher' })

        if (!user || user.length === 0) {
            return res.status(404).json({
                message: "No teachers found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Teachers retrieved successfully",
            success: true,
            teachers: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to retrieve teachers",
            success: false
        });
    }
};

export const getStudents = async (req, res) => {
    try {
        const user = await User.find({ role: 'student' })

        if (!user || user.length === 0) {
            return res.status(404).json({
                message: "No students found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Students retrieved successfully",
            success: true,
            students: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to retrieve students",
            success: false
        });
    }
};

export const deleteUsers = async (req, res) => {
    try {
        const { userId } = req.params

        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(500).json({
                message: "User not found",
                success: true
            })
        }

        return res.status(200).json({
            message: "User deleted successfully",
            success: true
        })

    } catch (error) {
        return res.status(200).json({
            message: "Failed to deleted user",
            success: false
        })
    }
}