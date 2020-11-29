exports.checkCsrfError = (err, request, response, next) => {
  if(err && err.code === 'EBADCSRFTOKEN') {
    return response.status(401).send('Bad csrf.');
  }
};

exports.csrfMiddleware = (request, response, next) => {
  response.locals.csrfToken = request.csrfToken();
  next();
};