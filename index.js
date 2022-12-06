import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import authRoutes from "./routes/auth.js"
import categoryRoutes from "./routes/category.js"
import projectRoutes from "./routes/project.js"
import {fileURLToPath} from 'url';
import cors from "cors";
 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to the database!"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// router middleware
app.use('/api', authRoutes)
app.use('/api', categoryRoutes)
app.use('/api', projectRoutes)

app.use(express.static(path.join(__dirname, "client/build")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend is running on port 👉️ ${process.env.PORT}`);
});
