module.exports = function (opts) {
  if (!opts) {
    opts = {}
  }
  const headerkey = opts.headerkey || 'Bearer'
  const reqKey = opts.reqKey || 'token'

  return function (req, res, next) {
    var token, error

    if (req.headers && req.headers.authorization) {
      var parts = req.headers.authorization.split(' ')
      if (parts.length === 2 && parts[0] === headerkey) {
        if (token) {
          error = true
        }

        token = parts[1]
      }
    }

    if (error) {
      res.send(400)
    } else {
      req[reqKey] = token
      next()
    }
  }
}
