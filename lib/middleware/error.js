// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.log('i am in the error handler');
  const status = err.status || 500;

  res.status(status);

  console.log(err);

  res.json({
    status,
    message: err.message,
  });
};
