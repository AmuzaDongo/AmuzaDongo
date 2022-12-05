import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

export const register = async (req, res) => {
  try {
    const { 
        fname, 
        lname, 
        email, 
        password, 
        country, 
        address,
        phone, 
    } = req.body;
    if (!fname.trim()) {
      return res.json({ error: "First name is required!" });
    }
    if (!lname.trim()) {
      return res.json({ error: "Last name is required!" });
    }
    if (!email) {
      return res.json({ error: "Email is required!" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters long" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        error: "email is taken",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new User({
        fname,
        lname,
        email,
        password: hashedPassword,
        country, 
        address,
        phone, 
    }).save();

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRETE, { expiresIn: "7d"});

    res.json({
        user: {
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            phone: user.phone,
            address: user.address,
            country: user.country,
            role: user.role
        },
        token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { 
        email, 
        password
    } = req.body;
    if (!email) {
      return res.json({ error: "Email is required!" });
    }
    if (!password || password.length < 6) {
      return res.json({ error: "Password must be at least 6 characters long" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "User not found!",
      });
    }
    const matchPassword = await comparePassword(password, user.password);
    if (!matchPassword) {
      return res.json({
          error: "Please enter the collect Password"
      })
    }

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRETE, { expiresIn: "7d"});

    res.json({
        user: {
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            phone: user.phone,
            address: user.address,
            country: user.country,
            role: user.role
        },
        token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const list = async (req, res) => {
  try {
      const all = await User.find({});
      res.json(all) 
  } catch (error) {
      return res.status(400).json(error.message)
  }
}

export const read = async (req, res) => {
  try {
      const user = await User.findOne({ _id });
      res.json(user);
  } catch (error) {
      return res.status(400).json(error.message)
  }
}

export const secrat = async (req, res) => {
  res.json({ currentUser: req.user });
}
