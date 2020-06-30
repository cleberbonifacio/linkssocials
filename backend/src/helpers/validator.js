const { getMessage } = require("./messages");

const getValidatorError = (error, messagePath) => {
  if (!error) return null;

  const errorMessages = {};

  error.details.map((detail) => {
    const message = detail.message;
    const key = detail.context.key;
    const type = detail.type;
    const path = `${messagePath}.${key}.${type}`;

    const customMessage = getMessage(path);

    if (!customMessage) {
      console.log("customMessage not foung for path:", path);
    }

    errorMessages[key] = customMessage || message;
  });

  return errorMessages;
};

module.exports = { getValidatorError, getMessage };
