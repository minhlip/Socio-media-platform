import express from "express";
import { login , register,logout } from "../controllers/auth.js";

const router = express.Router()
//find user by ID
router.post("/register", register) 
router.post("/login", login)
router.post("/logout", logout) 


export default router