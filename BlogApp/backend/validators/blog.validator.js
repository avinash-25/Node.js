import Joi from "joi";

export const addBlogSchema = Joi.object({
  title: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  category: Joi.string()
    .required()
    .valid(
      "science",
      "education",
      "sports",
      "gaming",
      "books",
      "foods",
      "travel",
    )
    .messages({
      "any.only": "not valid",
    }),
  tags: Joi.string().optional(),
});

export const updateBlogSchema = Joi.object({
  title: Joi.string().required().trim().optional(),
  description: Joi.string().required().trim().optional(),
  category: Joi.string()
    .required()
    .optional()
    .valid(
      "science",
      "education",
      "sports",
      "gaming",
      "books",
      "foods",
      "travel",
    )
    .messages({
      "any.only": "not valid",
    }),
  tags: Joi.string().optional(),
}).min(1);
