import { Course } from "../models/course.model.js";

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

export const uploadAssignment = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { title, description, dueDate } = req.body;

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const newAssignment = { title, description, dueDate };
        course.assignments.push(newAssignment);

        await course.save();

        res.status(200).json({ message: 'Assignment uploaded successfully', assignment: newAssignment });
    } catch (error) {
        console.error('Error uploading assignment:', error);
        res.status(500).json({ message: 'Error uploading assignment', error: error.message });
    }
};

export const uploadMaterial = async (req, res) => {
    try {
        const { courseId } = req.params;
        const { title, link } = req.body;

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const newMaterial = { title, link };
        course.materials.push(newMaterial);

        await course.save();

        res.status(200).json({ message: 'Material uploaded successfully', material: newMaterial });
    } catch (error) {
        console.error('Error uploading material:', error);
        res.status(500).json({ message: 'Error uploading material', error: error.message });
    }
};
