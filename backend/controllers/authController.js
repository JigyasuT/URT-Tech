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


import jwt from "jsonwebtoken";

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
      secure: false, 
      sameSite: "lax",   // CSRF protection
      maxAge:8* 60 * 1000  // 2 minutes
    });

    return res.json({ message: "Login successful" });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
