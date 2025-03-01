import express from "express";
import User from "../models/user.js";

const router = express.Router();

// ✅ Get User Profile by Email
router.get("/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// ✅ Create or Update Profile
router.post("/", async (req, res) => {
    try {
        const { fullName, email, gender, dateOfBirth, phoneNumber } = req.body;

        let user = await User.findOne({ email });

        if (user) {
            // Update existing user
            user.fullName = fullName;
            user.gender = gender;
            user.dateOfBirth = dateOfBirth;
            user.phoneNumber = phoneNumber;
        } else {
            // Create new user
            user = new User({ fullName, email, gender, dateOfBirth, phoneNumber });
        }

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

export default router;
