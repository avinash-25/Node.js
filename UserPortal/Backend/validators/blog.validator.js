import Joi from 'joi'

export const addBlogSchema = Joi.object({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    category: Joi.string()
        .required()
        .valid("science", "sports", "education", "gaming", "books", "foods", "travel")
        .messages({ "any.only": "Not Valid" }),
    tags: Joi.string().optional()
})

// import Joi from "joi";

// export const addBlogSchema = Joi.object({
//   title: Joi.string().required().trim(),
//   description: Joi.string().required().trim(),
//   category: Joi.string()
//     .required()
//     .valid(
//       "science",
//       "education",
//       "sports",
//       "gaming",
//       "books",
//       "foods",
//       "travel"
//     )
//     .messages({
//       "any.only": "not valid",
//     }),
//   tags: Joi.string().optional(),
// });