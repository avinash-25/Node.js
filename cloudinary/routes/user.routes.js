import { Router } from "express";
import { loginUser, userRegister } from "../controllers/user.controller.js";

const router = Router();

router.post("/register", userRegister);

router.post("/login", loginUser);

export default router;