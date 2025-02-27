import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password, fullName, gender, dateOfBirth, phoneNumber } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            fullName,
            gender,
            dateOfBirth,
            phoneNumber
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error("❌ Registration Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

export default router;
