import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    teacherInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    department: {
        type: String,
        required: true
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ],
    attendanceRecords: [
        {
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
                required: true
            },
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student', 
                required: true
            },
            attendanceDate: {
                type: Date,
                default: Date.now
            },
            status: {
                type: String,
                enum: ['Present', 'Absent'],
                required: true
            }
        }
    ],
    notifications: [
        {
            message: String,
            date: {
                type: Date,
                default: Date.now
            },
            isRead: {
                type: Boolean,
                default: false
            }
        }
    ],
}, { timestamps: true });

export default mongoose.model('Teacher', teacherSchema);
