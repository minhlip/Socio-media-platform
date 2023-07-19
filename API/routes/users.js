import express from "express";
import { getUser,updateUser } from "../controllers/user.js";

const router = express.Router()
//find user by ID
router.get("/find/:userId", getUser)
router.put("/", updateUser)


export default router