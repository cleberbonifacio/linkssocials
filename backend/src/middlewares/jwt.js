const { verifyJwt, getTokenFromHeaders } = require("../helpers/jwt");

const checkJwt = (req, res, next) => {
  const { url: path } = req;

  const excludePaths = ["/auth/sign-in", "/auth/sign-up", "/auth/refresh"];
  const isExcluded = !!excludePaths.find((p) => p.startsWith(path));

  if (isExcluded) return next();

  const token = getTokenFromHeaders(req.headers);

  if (!token) return res.jsonCodeUnauthorized(null, "Invalid Token");

  try {
    const decoded = verifyJwt(token);
    req.AccountId = decoded.id;
    next();
  } catch (error) {
    return res.jsonCodeUnauthorized(null, "Invalid Token");
  }
};

module.exports = checkJwt;
