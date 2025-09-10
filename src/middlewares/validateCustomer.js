const validate = (schema) => {
  return (req, res, next) => {
    const options = { abortEarly: false, allowUnknown: false, stripUnknown: true };

    const validations = ['params', 'query', 'body'];
    for (const key of validations) {
      if (schema[key]) {
        const { error, value } = schema[key].validate(req[key], options);
        if (error) {
          return res.status(400).json({
            error: {
              code: 'VALIDATION_ERROR',
              details: error.details.map((d) => d.message)
            }
          });
        }
        
        Object.assign(req[key], value);
      }
    }

    next();
  };
};

export default validate;
