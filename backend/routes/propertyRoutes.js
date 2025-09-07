import express from "express";
import { getProperties, getPropertyById, addProperty } from "../controllers/propertyController.js";
import { protect } from "../middleware/authMiddleware.js";
import { singleUpload } from "../models/multer.js";

const router = express.Router();

router.get("/getAll", getProperties);
router.get("/getbyId:id", getPropertyById);
router.post("/add", protect,singleUpload,addProperty);

export default router;
