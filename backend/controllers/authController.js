// import jwt from "jsonwebtoken";

// const adminUser = {
//   email: "admin@test.com",
//   password: "admin123" // In real app use bcrypt
// };

// export const login = (req, res) => {
//   const { email, password } = req.body;
//   if (email === adminUser.email && password === adminUser.password) {
//     const token = jwt.sign({ email },process.env.JWT_SECRET, { expiresIn: "1d" });
//     return res.json({ token });
//   }
//   res.status(401).json({ message: "Invalid credentials" });
// };

// import User from "../model/user.model.js";





import User from "../models/user.js"
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";       
// import genToken from "../utils/genToken.js"; // Make sure this file exists
import genToken from "../utils/token.js";




const adminUser = {
  email: "admin@test.com",
  password: "admin123" // In real app, use bcrypt
};

export const login = (req, res) => {
  const { email, password } = req.body;
   if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  if (email === adminUser.email && password === adminUser.password) {
    // Create JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true, 
      secure: true, 
      sameSite: "lax",   // CSRF protection
      maxAge:8* 60 * 1000  // 2 minutes
    });

    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
};










export const UsersignUp=async (req,res)=>{
    try {
        let {name,email,password}=req.body;
        let existUser=await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User is already exist"})
        }
        let hashPassword=await bcrypt.hash(password,10)
        let user=await User.create({name,email,password:hashPassword})
        let token=await genToken(user._id)
    res.cookie("token",token,{
     httpOnly:true,
     secure:process.env.NODE_ENVIRONMENT=="production",
     sameSite:"strict",
     maxAge:7*24*60*60*1000
    })
    return res.status(201).json(user)
    } catch (error) {
       
        return res.status(500).json({message:`signup error ${error}`})
    }
}

export const Userlogin =async (req,res)=>{
    try {
        let {email,password}=req.body;
        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User is not exist"})
        }
     let isMatch=await bcrypt.compare(password,user.password)
     if(!isMatch){
        return res.status(400).json({message:"something is wrong"})
     }
        let token=await genToken(user._id)

    // res.cookie("token",token,{
    //  httpOnly:true,
    //  secure:process.env.NODE_ENVIRONMENT==="production",
    //  sameSite:"strict",
    //  maxAge:7*24*60*60*1000
    // })

    res.cookie("token", token, {
  httpOnly: true,
  secure: false,          // localhost
  sameSite: "lax",        // IMPORTANT
  maxAge: 7 * 24 * 60 * 60 * 1000,
});


    return res.status(200).json(user)

    } catch (error) {
         return res.status(500).json({message:`login error ${error}`})
    }
}

//    export const logOut=async (req,res)=>{
//       try {
//         res.clearCookie("token")
//         return res.status(200).json({message:"User Logout Successfully"})
//       } catch (error) {
//         return res.status(500).json({message:`logout error ${error}`})
//       }
//    }

export const UserlogOut = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,   // 🔥 SAME
      sameSite: "lax", // 🔥 SAME
    });

    return res.status(200).json({
      message: "User Logout Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: `logout error ${error.message}`,
    });
  }
};

