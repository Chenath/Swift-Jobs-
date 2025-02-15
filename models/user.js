const mongoose = require('Mongoose');

const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String }, 
    createdAt: { type: Date, default: Date.now }
})
console.log('Hey')