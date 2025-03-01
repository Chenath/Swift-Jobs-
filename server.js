import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import profileRoutes from "./routes/profile.js";

dotenv.config();

const app = express();
app.use(express.json());  // Middleware to parse JSON

// ✅ Routes
app.use("/api/profile", profileRoutes);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.error("MongoDB connection error:", error));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
