const swaggerDefinitions = {
  SearchResult: {
    type: "object",
    properties: {
      author: {
        type: "string",
      },
      url: {
        type: "string",
      },
      title: {
        type: "string",
      },
      selfText: {
        type: "string",
      },
      thumbnail: {
        type: "string",
      },
    },
  },
};

module.exports = swaggerDefinitions;
