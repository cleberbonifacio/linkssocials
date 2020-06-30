require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const refreshTokenPrivateKey = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

const option = { expiresIn: "1h" };
const refreshOption = { expiresIn: "30d" };

const generateJwt = (payload) => {
  return jwt.sign(payload, tokenPrivateKey, option);
};

const generateRefreshJwt = (payload) => {
  return jwt.sign(payload, refreshTokenPrivateKey, refreshOption);
};

const verifyJwt = (token) => {
  return jwt.verify(token, tokenPrivateKey);
};

const verifyRefreshJwt = (token) => {
  return jwt.verify(token, refreshTokenPrivateKey);
};

module.exports = {
  generateJwt,
  generateRefreshJwt,
  verifyJwt,
  verifyRefreshJwt,
};
