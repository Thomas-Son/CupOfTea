import { Router } from "express";

import { getAllTea, getAllCategory, getFavorite } from "../controller/tea.js";

import tea_routes from "./tea.routes.js"
import user_routes from "./user.routes.js"

const router = Router();

router.get("/api/v1/tea/all", getAllTea);
router.get("/api/v1/category/all", getAllCategory);

router.get("/api/v1/tea/favorite", getFavorite)

router.use("/api/v1/user", user_routes);



router.get("*", (req, res) => {
        res.status(404).json({ msg: "not found" });
});

export default router;