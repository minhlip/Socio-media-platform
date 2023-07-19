import express from "express";
import { getRelationships,deleteRelationship,addRelationship} from "../controllers/relationship.js";

const router = express.Router()
//find user by ID
router.get("/",getRelationships)
router.post("/",addRelationship)
router.delete("/",deleteRelationship)


export default router