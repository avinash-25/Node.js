//! 1) import {Router} from 'express'
//! 2) import all the controller functions
//! 3) create an instance of Router
//! 4) define all the routes and attach the controller functions
//! 5) export the router instance

import { Router } from "express";
import {
  deleteUser,
  getProfile,
  getUser,
  getUsers,
  login,
  logout,
  register,
  updateUser,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import {
  loginUserSchema,
  updatedUserSchema,
  userRegisterSchema,
} from "../validators/user.validator.js";

const router = Router();

router.post("/register", validateBody(userRegisterSchema), register);

router.get("/all", getUsers); //TODO:

router.get("/single/:id", getUser); //TODO:

router.patch("/update/:id", validateBody(updatedUserSchema), updateUser); //TODO:

router.delete("/delete/:id", deleteUser); //TODO:

router.post("/login", validateBody(loginUserSchema), login);

router.post("/logout", authenticate, logout);

router.get("/profile", authenticate, getProfile);

export default router;

//! get, post, patch, delete, put
//? server data --> post, patch ,put
