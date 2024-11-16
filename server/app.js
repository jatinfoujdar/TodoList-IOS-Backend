import express from 'express';
import dotenv from 'dotenv';
import User from './model/userModel';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; 

dotenv.config();

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('<h1>Server has Started</h1>');
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(email && password && name)) {
      res.status(400).send("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).send("User created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default app;
