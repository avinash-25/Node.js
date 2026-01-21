import ErrorResponse from "../utils/ErrorResponse.util.js";

export const validateBody = (schema) => {
  return (req, res, next) => {
    let { error, value } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      let message = error.details.map((err) => err.message).join(", ");
      throw new ErrorResponse(message, 400);
    }

    req.body = value;
    next();
  };
};
