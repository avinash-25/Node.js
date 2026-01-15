import { Router } from "express";
import { addBlog, getBlog, getBlogs } from "../controllers/blog.controller.js";
import { addBlogSchema } from "../validators/blog.validator.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/add",validateBody(addBlogSchema),upload.single("image"),addBlog);
router.get("/all", getBlogs); 
router.get("/:id", getBlog);


export default router;