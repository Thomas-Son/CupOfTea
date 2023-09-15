import { Router } from "express";
import { getAllTea } from "../controller/tea.js";

const router = Router();

router.get("/all", getAllTea);

export default router;