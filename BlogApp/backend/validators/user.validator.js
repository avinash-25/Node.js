import Joi from "joi";

//! create a layout which will be compared with req.body
//? order does not matter if we have defined datatypes first

export const userRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(49).optional(),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(50),
  age: Joi.number().required().min(1).max(90),
  isMarried: Joi.boolean().optional(),
});

export const updatedUserSchema = Joi.object({
  name: Joi.string().min(3).max(49).optional(),
  password: Joi.string().optional().min(3).max(50),
  age: Joi.number().optional().min(1).max(90),
  isMarried: Joi.boolean().optional(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(3).max(50),
});

//! compare this layout with req.body
