import { Router } from "express";
import Query from "../model/query.js";

const router = Router();

router.get("/api/v1/tea/all", async (req, res) => {
        const query = "SELECT * FROM tea";
        const [data] = await Query.find(query);
        res.json(data);
});

// router.get("/api/v1/:url_image/:id", async (req, res) => {
//     const query = "SELECT id, label_1, url_image, url_tea FROM tea";
//     const [data] = await Query.find(query);
//     res.json(data);
// });

export default router;