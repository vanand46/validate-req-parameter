/**
 * Middleware for validating route parameters with a given regex pattern
 * @param {RegExp} regex - The pattern to validate the parameter
 * @param {string} paramName - The route parameter name
 * @returns {Function} function for express.js
 */
function validateParmameter(regex, paramNmae) {
  try {
    return (req, res, next) => {
      const value = req.params[paramNmae];

      if (value === undefined) {
        return res
          .status(400)
          .json({ message: `${paramNmae} - Missing parameter!`, error: true });
      }
      if (regex.test(value)) {
        next();
      } else {
        res
          .status(400)
          .json({ message: `${paramNmae} - Invalid parameter!`, error: true });
      }
    };
  } catch (error) {
    console.error(
      `Error occurred in validateParam middleware: ${error.message}`
    );
    res.status(500).json({
      error: true,
      message: "Internal Server Error",
    });
  }
}

module.exports = validateParmameter;
