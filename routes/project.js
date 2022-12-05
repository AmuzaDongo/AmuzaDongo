import express from "express";


const router = express.Router();

import { create, update, remove, list, read, completed, inprogress } from "../controllers/project.js"
import { requireSignin, isAdmin } from "../middlewares/auth.js";

router.post("/project", requireSignin, isAdmin, create);
router.put("/project/:projectId", requireSignin, isAdmin, update);
router.delete("/project/:projectId", requireSignin, isAdmin, remove);
router.get("/projects", list);
router.get("/project/:slug", read);
router.get("/projects/completed", completed);
router.get("/projects/inprogress", inprogress);

export default router;