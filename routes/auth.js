import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js"; // Add .js extension for ES modules

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    try {
        console.log("Received Data:", req.body);
        

        const { username, email, password } = req.body;
        console.log('hey 1')
        const existingUser = await User.findOne({ email });
        console.log('hey 2')
        if (existingUser) return res.status(400).json({ message: "Email already registered" });
        console.log('hey 3 ')
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('hey 4')
        const newUser = new User({ username, email, password: hashedPassword });
        console.log('hey 5')
        await newUser.save();
        console.log('hey 6')

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
        console.error("❌ Login Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});


export default router; // Use "export default" instead of "module.exports"
