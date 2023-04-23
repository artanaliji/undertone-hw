const Joi = require("joi");

const searchSchema = {
  query: Joi.object({
    text: Joi.string().required(),
    sort: Joi.string().valid("new", "hot", "top", "relevance").default("new"),
  }),
};

module.exports = {
  searchSchema,
};
