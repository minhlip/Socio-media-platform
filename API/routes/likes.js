import express from "express";
import { getLikes,deleteLike,addLike} from "../controllers/like.js";

const router = express.Router()
//find user by ID
router.get("/",getLikes)
router.post("/",addLike)
router.delete("/",deleteLike)


export default router