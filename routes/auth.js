import express from "express";

const router = express.Router();

import {register,login, list, read } from "../controllers/auth.js"
import { requireSignin, isAdmin } from "../middlewares/auth.js";

router.post("/users/register", register);
router.post("/users/login", login);
router.get("/users", requireSignin, isAdmin, list);
router.get("/users", requireSignin, read);


export default router;
