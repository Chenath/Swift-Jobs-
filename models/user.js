import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    dateOfBirth: { type: Date, required: true },
    phoneNumber: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema);
export default User;
