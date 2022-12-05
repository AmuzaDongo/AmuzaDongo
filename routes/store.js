import express from "express";


const router = express.Router();

import { create, update, remove, list, read } from "../controllers/store.js"
import { requireSignin, isAdmin } from "../middlewares/auth.js";

router.post("/store", requireSignin, isAdmin, create);
router.put("/store/:storeId", requireSignin, isAdmin, update);
router.delete("/store/:storeId", requireSignin, isAdmin, remove);
router.get("/stores", list);
router.get("/store/:slug", read);

export default router;