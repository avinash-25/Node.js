//! 1) import {Router} from 'express'
//! 2) import all the controller functions
//! 3) create an instance of Router
//! 4) define all the routes and attach the controller functions
//! 5) export the router instance

import Router from 'express';
import { deleteUser, getUser, getUsers, register, updateUser } from '../controllers/user.controller.js';

const router = Router();

router.post("/register", register);
router.get("/all", getUsers);
router.get("/single/:id", getUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;