//! error middleware
export const errorHandler = (err, req, res, next) => {
  //! short circuiting
  err.message = err.message || "Something went wrong";
  err.statusCode = err.statusCode || 500;

  if (err.name === "ValidationError") {
    err.statusCode = 400;
    err.message = err.message; //`${Object.values(err.errors)}`;

  } else if (err.code === 11000) {
    
    let key = Object.keys(err);
    key = key[0].toUpperCase();
    err.statusCode = 409;
    err.message = `${key} already exist`;

  } else if (err.name === "CastError") {
    err.statusCode = 404;
    err.message = `Invalid ${err.path}: ${err.value}`;

  } else if (err.name === "MulterError") {
    if (err.code = "LIMIT_UNEXPECTED_FILE") {
      err.statusCode = 400;
      err.message = "You can add only one image at a time";
    }
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