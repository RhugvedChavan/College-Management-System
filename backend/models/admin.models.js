import mongoose from 'mongoose';
import { User } from './User';

const adminSchema = new mongoose.Schema({
    permissions: {
        type: Array,
        default: ['manageUsers', 'manageCourses', 'manageTeachers', 'manageStudents']
    },
    actionsLog: [
        {
            action: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
}, { timestamps: true });

export const Admin = User.discriminator('Admin', adminSchema);
