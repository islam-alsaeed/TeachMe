import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },

})

export const Student = mongoose.model('Student', StudentSchema);