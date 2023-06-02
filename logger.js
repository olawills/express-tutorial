const logger = (req, res, next) => {
  const method = req.method;
  const root = req.url;

  console.log(method, root);
  next();
};

module.exports = logger;
