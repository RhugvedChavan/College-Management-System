import mongoose from 'mongoose';
import { User } from './user.models';

const studentSchema = new mongoose.Schema({
    enrollments: [
        {
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
            enrollmentDate: {
                type: Date,
                default: Date.now
            }
        }
    ],
    attendanceRecords: [
        {
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
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
    grades: [
        {
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
            grade: {
                type: String,
                required: true
            }
        }
    ],
}, { timestamps: true });

export const Student = User.discriminator('Student', studentSchema);
