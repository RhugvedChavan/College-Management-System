import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    enrolledStudents: [
        {
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student'
            },
            enrollmentDate: {
                type: Date,
                default: Date.now
            }
        }
    ],
    materials: [
        {
            title: String,
            link: String,
            uploadedAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    assignments: [
        {
            title: {
                type: String,
                required: true
            },
            description: String,
            dueDate: Date,
            postedDate: {
                type: Date,
                default: Date.now
            },
            submissions: [
                {
                    studentId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Student'
                    },
                    fileLink: String,
                    submittedAt: {
                        type: Date,
                        default: Date.now
                    },
                    grade: String
                }
            ]
        }
    ],
    attendanceRecords: [
        {
            studentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Student',
            },
            date: {
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
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
}, { timestamps: true });


export const Course = mongoose.model('Course', courseSchema);
