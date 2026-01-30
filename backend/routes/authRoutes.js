import express from "express";
import { login, Userlogin, UserlogOut, UsersignUp } from "../controllers/authController.js";

const router = express.Router();
router.post("/login", login);

router.post("/usignup",UsersignUp)
router.post("/ulogin",Userlogin)
router.post("/ulogout",UserlogOut)


export default router;
