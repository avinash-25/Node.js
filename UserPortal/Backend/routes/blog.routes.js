import { Router } from "express";
import { addBlog, getBlog, getBlogs } from "../controllers/blog.controller.js";

const router = Router();

router.post("/add", addBlog);
router.get("/all", getBlogs);
router.get("/:id", getBlog);


export default router;