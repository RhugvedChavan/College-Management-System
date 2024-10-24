import { Course } from "../models/course.model.js";
import mongoose from "mongoose";

export const enrollInCourse = async (req, res) => {
    try {
        const { courseId, studentId } = req.params;

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const alreadyEnrolled = course.enrolledStudents.some(student => student.toString() === studentId);
        if (alreadyEnrolled) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        course.enrolledStudents.push(studentId);
        await course.save();

        res.status(200).json({ message: 'Enrolled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


export const enrolledCourses = async (req, res) => {
    try {
        const { studentId } = req.params;

        // Ensure that the studentId is converted to a valid mongoose ObjectId
        if (!mongoose.Types.ObjectId.isValid(studentId)) {
            return res.status(400).json({ message: 'Invalid student ID format' });
        }

        // Query to find courses where the student is enrolled
        const courses = await Course.findById(studentId).populate('teacher', 'fullname email'); // Populating teacher's name and email for example

        if (!courses || courses.length === 0) {
            return res.status(404).json({ message: 'No enrolled courses found for the student.' });
        }

        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching enrolled courses:', error);
        res.status(500).json({ message: 'Error fetching enrolled courses', error: error.message });
    }
};



export const submitAssignment = async (req, res) => {
    try {
        const { fileLink } = req.body;
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const assignment = course.assignments.id(req.params.assignmentId);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        assignment.submissions.push({
            studentId: req.user._id,
            fileLink,
        });

        await course.save();
        res.status(200).json({ message: 'Assignment submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};