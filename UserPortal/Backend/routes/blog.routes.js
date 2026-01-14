import { Router } from "express";
import { addBlog } from "../controllers/blog.controller.js";

const router = Router();

router.post("/addBlog", addBlog);


export default router;