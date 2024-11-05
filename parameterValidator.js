/**
 * Middleware for validating route parameters with a given regex pattern
 * @param {RegExp} regex - The pattern to validate the parameter
 * @param {string} paramName - The route parameter name
 * @returns {Function} function for express.js
 */
function validateParmameter(regex, paramNmae) {
  return (req, res, next) => {
    const value = req.params[paramNmae];
    if (regex.test(value)) {
      next();
    } else {
      res.status(400).json({ error: `${paramNmae} - Invalid parameter!` });
    }
  };
}
