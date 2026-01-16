//! error middleware
export const errorHandler = (err, req, res, next) => {
  //! short circuiting
  err.message = err.message || "Something went wrong";
  err.statusCode = err.statusCode || 500;

  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.message = err.message; //`${Object.values(err.errors)}`;
  } else if (err.code === 11000) {
    err.statusCode = 409;
    err.message = "already exists";
  } else if (err.name === "CastError") {
    err.statusCode = 404;
    err.message = "Invalid id";
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    errObject: err,
    errline:err.stack
  });
};

//! define a errorMiddleware function, with four parameters (err, req, res, next)
//! use this errorMiddleware in the entry file, inside app.use(errorMiddleware),
//! the location of app.use(errorMiddleware) is very important --> it should be after all the routes or above listen method

//? use trycatch block to handle errors, in catch block, call next(error)
//? next(error) ==> this will call the errorHandler middleware by passing the error object to the middleware where we can handle the error gracefully

let errObject = {
  errors: {
    category: {
      name: "ValidatorError",
      message: "`abc` is not a valid enum value for path `category`.",
      properties: {
        message: "`abc` is not a valid enum value for path `category`.",
        type: "enum",
        enumValues: [
          "science",
          "education",
          "sports",
          "gaming",
          "books",
          "foods",
          "travel",
        ],
        path: "category",
        value: "abc",
        length: 3,
      },
      kind: "enum",
      path: "category",
      value: "abc",
    },
  },
  _message: "Blog validation failed",
  statusCode: 400,
  name: "ValidationError",
  message: "SOmething is missing",
};