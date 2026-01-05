import Router from 'express';
import { deleteUser, getuser, getusers, register, updateUser } from '../controllers/user.controller.js';

const router = Router();

router.post("/register", register);
router.get("/all", getusers);
router.get("/single/:id", getuser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;