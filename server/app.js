import express from 'express';
import dotenv from 'dotenv';
import User from './model/userModel';

dotenv.config();

const app = express();


app.get('/', (req, res) => {
  res.send('<h1>Server has Started</h1>');
});

app.post("/signup",async(req,res)=>{

    const {name,email,password} = req.body

    if(!(email && password && name)){
      res.status(400).send("All the things are required")
    }

    const existingUser = await User.findOne(email)
    if(existingUser){
        res.status(400).send("User Already Exit")
    }
    
    


})


export default app;
