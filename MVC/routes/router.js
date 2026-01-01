//* for every routes file follow this three files

//? 1) Destructure the Router from express.
//? Invoke the top level function.
//? Export the router
//? In the main file import this all api

import {Router} from 'express';
import { deleteUser, getAllUser, getSignleUser, registerUser, updateUser } from './controller.js';

const router = Router();

router.get("/users", getAllUser)
router.get("/one/:id", getSignleUser);
router.post("/register", registerUser);
router.delete("/one/delete/:id", deleteUser);
router.patch("/update/:id",updateUser);


export default router;

