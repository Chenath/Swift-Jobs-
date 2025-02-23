import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js"; // Add .js extension for ES modules
import connectDB from "./config/db.js";



dotenv.config();
connectDB();
const app = express();

// ✅ Middleware to parse JSON
app.use(express.json()); 
app.use(cors()); // ✅ Enable CORS if testing from frontend

app.post("/test",(req,res)=>{
  console.log(req.body.email);
  res.send("Hello world");
    
});
// Routes
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;
// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
