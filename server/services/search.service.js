const axios = require("axios");
const logger = require("../config/logger");

/**
 * Perform a Reddit search
 * @param {String} query - The search query
 * @param {String} sort - The sorting method for the search results (new, hot, top)
 * @returns {Promise<Object>} - The search results as an object
 */
const redditSearch = async (query, sort = "new") => {
  try {
    const response = await axios.get(`${process.env.REDDIT_BASE_URL}?q=${query}&sort=${sort}`);
    return response.data;
  } catch (error) {
    logger.error(error);
    throw new Error("Error while performing Reddit search!");
  }
};

module.exports = {
  redditSearch,
};
