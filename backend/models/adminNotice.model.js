import mongoose from "mongoose";

const adminNoticeSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const AdminNotice = mongoose.model("AdminNotice", adminNoticeSchema)