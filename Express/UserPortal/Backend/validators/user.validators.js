import Joi from 'joi';

//* Create a layout which will compared with req.body
//? order does not matter if we have defiened datatypes first.

export const userRegisterSchema = Joi.object({
    name: Joi.string().required().min(3).max(49),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).max(50),
    age: Joi.number().min(1).max(70).required(),
    isMarried: Joi.boolean().optional()
})