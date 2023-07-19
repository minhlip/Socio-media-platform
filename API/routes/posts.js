import express from "express";
import { getPosts, addPost } from "../controllers/post.js";

const router = express.Router()
    //find user by ID
router.get("/",getPosts)
router.post("/",addPost)

export default router 