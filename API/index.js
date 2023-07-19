import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import relationshipRoutes from "./routes/relationships.js"

app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(cookieParser());
app.use(cors(
  {origin: "http://localhost:3001"}
))
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function(req, file, cb) {
    cb(null,Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req,res)=>{
  const file = req.file
  res.status(200).json(file.filename)
})
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships",relationshipRoutes)

app.listen(8800, () => {
  console.log("API working!");
});