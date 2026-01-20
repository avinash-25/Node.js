class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    // in derived class constructor function, the first statement should be super()
    // this.message = message;
    this.statusCode = statusCode;
  }
}

// throw new ErrorResponse("hi", 404);

export default ErrorResponse;
