import express from "express";
import { getComments, addComments,deleteComment } from "../controllers/comment.js";

const router = express.Router()
//find user by ID
router.get("/",getComments)
router.post("/",addComments)
router.delete("/:id", deleteComment);


export default router