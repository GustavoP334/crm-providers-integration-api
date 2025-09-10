const error = (err, req, res, next) => {
  const status = err.status || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const msg = err.message || 'Unexpected error';

  res.status(status).json({ 
    error: {
      code, 
      message: msg, 
      traceId: req.headers['x-correlation-id'] || null 
    } 
  });
};

export default error;