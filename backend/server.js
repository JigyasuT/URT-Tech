import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import connectDB from "./utils/db.js";
import propertyRoutes from "./routes/propertyRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";


dotenv.config();
connectDB()

const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/properties", propertyRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
