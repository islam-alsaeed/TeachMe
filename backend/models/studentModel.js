import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // password: { type: String, required: true },

})

const Student = mongoose.model('Cat', StudentSchema);