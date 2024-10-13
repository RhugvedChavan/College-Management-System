import { User } from "../models/user.models.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const handleRegister = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    if (!fullname || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User with this email already registered. Please login.",
        success: false
      });
    }

    if (!['student', 'teacher', 'admin'].includes(role)) {
      return res.status(400).json({
        message: "Invalid role specified",
        success: false
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      role
    });

    return res.status(201).json({
      message: "Registration completed",
      success: true,
      user: { id: newUser._id, fullname: newUser.fullname, email: newUser.email, role: newUser.role }
    });

  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({
      message: "Failed to register user",
      success: false
    });
  }
}

export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found with this email.",
        success: false
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 604800000
    });

    return res.json({
      message: `You have logged in as ${user.role}`,
      success: true,
      user: { id: user._id, fullname: user.fullname, email: user.email, role: user.role },
      redirectUrl: `/${user.role}`
    });

  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({
      message: "Failed to login",
      success: false
    });
  }
};


export const handleLogout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    return res.status(200).json({
      message: "Logout successful",
      success: true
    });
  } catch (error) {
    console.error("Error occurred during logout:", error);
    return res.status(500).json({
      message: "Failed to logout",
      success: false
    });
  }
};