import { Course } from "../models/course.model.js";

export const uploadMaterals = async (req, res) => {
    try {
        const { title, link } = req.body;
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.materials.push({ title, link });
        await course.save();
        res.status(200).json({ message: 'Material uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const uploadAssignments = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.assignments.push({ title, description, dueDate });
        await course.save();
        res.status(200).json({ message: 'Assignment created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const uploadAttendance = async (req, res) => {
    try {
        const { attendanceRecords } = req.body;
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.attendanceRecords.push(...attendanceRecords);
        await course.save();
        res.status(200).json({ message: 'Attendance uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};