import { Course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
    try {
        const { courseName, teacherId, courseCode, description, startDate, endDate } = req.body;

        if (!courseName || !courseCode || !description || !startDate || !endDate) {
            return res.status(403).json({
                message: "All fields are required",
                success: false
            })
        }
        
        const newCourse = await Course.create({
            courseName,
            courseCode,
            description,
            teacher: teacherId,
            startDate,
            endDate,
        });

        res.status(201).json({
            message: 'Course created successfully',
            success: true,
            course: newCourse
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error creating course',
            succes: false,
        });
    }
};


export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        
        if (!courses) {
            return res.status(403).json({
                message: "Courses not found",
                success: false
            })
        }

        res.status(200).json({
            message: "found",
            course: courses
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching courses',
            error: error.message
        });
    }
};


export const getCourseById = async (req, res) => {
    try {
        const { courseId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ message: 'Invalid course ID' });
        }

        const course = await Course.findById(courseId)
            .populate('teacher')
            .populate('enrolledStudents.studentId');

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course', error: error.message });
    }
};


export const updateCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const updates = req.body;

        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({
                message: 'Invalid course ID',
                succes: false
            });
        }

        const updatedCourse = await Course.findByIdAndUpdate(courseId, updates, { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({
            message: 'Course updated successfully',
            success: true,
            course: updatedCourse
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating course',
            success: false,
            error: error.message
        });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const { courseId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ message: 'Invalid course ID' });
        }

        const deletedCourse = await Course.findByIdAndDelete(courseId);

        if (!deletedCourse) {
            return res.status(404).json({
                message: 'Course not found',
                succes: false
            });
        }

        res.status(200).json({
            message: 'Course deleted successfully',
            success: true
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting course',
            success: false,
            error: error.message
        });
    }
};
