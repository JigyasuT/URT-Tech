// import express from "express";
// import { getProperties, getPropertyById, addProperty, editProperty } from "../controllers/propertyController.js";
// import { protect } from "../middleware/authMiddleware.js";
// import { singleUpload } from "../models/multer.js";
// import adminAuth from "../middleware/adminAuth.js";
// // import upload from "../middlewares/multer.js";
// // import { singleUpload } from "../models/multer.js";

// const router = express.Router();

// router.get("/getAll", getProperties);
// // router.get("/getbyId:id", getPropertyById);
// router.put(
//   "/edit/:id",
//   adminAuth,
//   upload.single("image"), // image optional
// //    adminAuth,
//   editProperty
// );

// router.post("/add", protect,singleUpload,addProperty);

// export default router;




















import express from "express";
import {
  getProperties,
  getPropertyById,
  addProperty,
  editProperty,
} from "../controllers/propertyController.js";

import { protect } from "../middleware/authMiddleware.js";
import adminAuth from "../middleware/adminAuth.js";
import { singleUpload } from "../models/multer.js";

const router = express.Router();

// GET ALL PROPERTIES
router.get("/getAll", getProperties);

// GET PROPERTY BY ID
router.get("/:id", getPropertyById);

// ADD PROPERTY (ADMIN ONLY)
router.post(
  "/add",
  protect,
  adminAuth,
  singleUpload,
  addProperty
);

// EDIT PROPERTY (ADMIN ONLY)
router.put(
  "/edit/:id",
  protect,
  adminAuth,
  singleUpload, // ✅ yahi use hoga
  editProperty
);

export default router;

