const { getMessage } = require("../helpers/messages");

const TYPE_JSON = "application/json";
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST = 400;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_ERROR = 500;

const jsonOK = function (data, message, metadata) {
  message = message ? message : getMessage("response.json.ok");
  metadata = metadata ? metadata : {};

  this.status(STATUS_CODE_OK);
  this.type(TYPE_JSON);
  return this.json({ message, data, metadata, status: STATUS_CODE_OK });
};

const jsonBadRequest = function (data, message, metadata) {
  message = message ? message : getMessage("response.json.bad_request");
  metadata = metadata ? metadata : {};

  this.status(STATUS_CODE_BAD_REQUEST);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status: STATUS_CODE_BAD_REQUEST,
  });
};

const jsonCodeUnauthorized = function (data, message, metadata) {
  message = message ? message : getMessage("response.json.unauthorized");
  metadata = metadata ? metadata : {};

  this.status(STATUS_CODE_UNAUTHORIZED);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status: STATUS_CODE_UNAUTHORIZED,
  });
};

const jsonCodeNotFound = function (data, message, metadata) {
  message = message ? message : getMessage("response.json.not_found");
  metadata = metadata ? metadata : {};

  this.status(STATUS_CODE_NOT_FOUND);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status: STATUS_CODE_NOT_FOUND,
  });
};

const jsonCodeServerError = function (data, message, metadata) {
  message = message ? message : getMessage("response.json.server_error");
  metadata = metadata ? metadata : {};

  this.status(STATUS_CODE_SERVER_ERROR);
  this.type(TYPE_JSON);
  return this.json({
    message,
    data,
    metadata,
    status: STATUS_CODE_SERVER_ERROR,
  });
};

const response = (req, res, next) => {
  res.jsonOK = jsonOK;
  res.jsonBadRequest = jsonBadRequest;
  res.jsonCodeUnauthorized = jsonCodeUnauthorized;
  res.jsonCodeNotFound = jsonCodeNotFound;
  res.jsonCodeServerError = jsonCodeServerError;
  next();
};

module.exports = response;
