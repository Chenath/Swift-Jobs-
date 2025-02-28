import express from "express";
import User from "../models/user.js";

const router = express.Router();

// ✅ GET user profile
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ UPDATE user profile
router.put("/:id", async (req, res) => {
    try {
        const { fullName, gender, dateOfBirth, phoneNumber } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { fullName, gender, dateOfBirth, phoneNumber },
            { new: true } // Return updated user
        );

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        res.json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("❌ Server Error:", error);  // Print full error details
        res.status(500).json({ message: "Server error", error: error.message });
    }
    
});

export default router;
