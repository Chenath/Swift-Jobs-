import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

// User Signup
export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ $or: [{ email }, { username }] });
        console.log('Hey 1')
        if (user) return res.status(400).json({ msg: 'User already exists' });
        console.log('Hey 2')
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('Hey 3')
        user = new User({ username, email, password: hashedPassword });
        await user.save();
        console.log('hey 4')
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

// User Login (Supports Username OR Email)
export const loginUser = async (req, res) => {
    const { login, password } = req.body; // 'login' can be username or email

    try {
        const user = await User.findOne({ $or: [{ email: login }, { username: login }] });
        if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }
};

// Google Authentication
export const googleAuth = async (req, res) => {
    const { googleId, name, email } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ username: name, email, googleId });
            await user.save();
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ msg: 'Server Error' });
    }
};
