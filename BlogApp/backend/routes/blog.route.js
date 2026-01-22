import { Router } from "express";
import { addBlog, generateDescription, getBlog, getBlogs, updateBlogDetails, updateImage, } from "../controllers/blog.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { addBlogSchema, updateBlogSchema, } from "../validators/blog.validator.js";


const router = Router();

router.post("/add", authenticate, validateBody(addBlogSchema), upload.single("image"), addBlog,);

router.get("/all", getBlogs);

router.patch("/edit-blog/:id", authenticate, validateBody(updateBlogSchema), upload.none(), updateBlogDetails);

router.patch("/edit-image/:id", authenticate, upload.single("image"), updateImage,);

router.post("/generate-description", generateDescription);

router.get("/:id", getBlog);


export default router;
