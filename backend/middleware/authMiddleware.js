// import jwt from "jsonwebtoken";

// export const protect = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "Not authorized" });

//   try {
//     jwt.verify(token, process.env.JWT_SECRET);
//     next();
//   } catch (err) {
//     res.status(403).json({ message: "Token invalid" });
//   }
// };


import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  // Get token from cookies
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request (optional)
    req.user = { email: decoded.email };

    next();
  } catch (err) {
    console.error("Protect middleware error:", err);
    res.status(403).json({ message: "Token invalid" });
  }
};

