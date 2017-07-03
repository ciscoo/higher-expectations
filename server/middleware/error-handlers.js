// https://github.com/wesbos/Learn-Node/blob/master/stepped-solutions/45%20-%20Finished%20App/handlers/errorHandlers.js

/**
 * Handler to catch `async` operation errors.
 * Reduces having to write `try-catch` all the time.
 */
exports.catchErrors = (action) => {
  return (req, res, next) => {
    action(req, res).catch(next)
  }
}

/**
 * Handle any invalid routes.
 */
exports.invalidRoute = (req, res, next) => {
  const err = new Error('Invalid route.')
  err.status = 404
  next(err)
}

/**
 * Validation error handler for Mongo.
 * The client app should handle displaying the errors.
 */
exports.validationErrors = (err, req, res, next) => {
  if (!err.errors) {
    return next(err)
  }
  res.status(400).json({
    status: 400,
    error: err.errors,
    data: {}
  })
}

/**
 * Show useful information to client in development.
 */
exports.development = (err, req, res, next) => {
  err.stack = err.stack || ''
  const status = err.status || 500
  res.status(status)
  res.json({
    status,
    error: err,
    data: {}
  })
}

/**
 * Do not show errors in production.
 */
exports.production = (err, req, res, next) => {
  if (err.status && err.status === 404) {
    if (req.accepts('json')) {
      res.json(err)
    } else {
      res.redirect('/')
    }
  } else {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {}
    })
  }
}
