import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "No token" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.email !== "admin@test.com") {
    return res.status(403).json({ message: "Admin only" });
  }

  next();
};

export default adminAuth;
