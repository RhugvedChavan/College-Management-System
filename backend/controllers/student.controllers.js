import { Course } from "../models/course.model.js";

export const enrollInCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const alreadyEnrolled = course.enrolledStudents.some(student => student.studentId.toString() === req.user._id.toString());
        if (alreadyEnrolled) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        course.enrolledStudents.push({ studentId: req.user._id });
        await course.save();
        res.status(200).json({ message: 'Enrolled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
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