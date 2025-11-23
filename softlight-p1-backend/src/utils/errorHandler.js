export function errorHandler(err, req, res, next) {
  console.error(err.stack); 

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    error: message,
  });
}

export function notFound(req, res, next) {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found`,
  });
}