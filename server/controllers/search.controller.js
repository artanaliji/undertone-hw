const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { searchService } = require("../services/");
const SearchResult = require("../models/SearchResult");

const search = catchAsync(async (req, res) => {
  // perform search
  const { text, sort } = req.query;
  const response = await searchService.redditSearch(text, sort);
  const parsedResults = response.data.children.map((result) => new SearchResult(result.data));
  res.status(httpStatus.OK).json(parsedResults);
});

module.exports = {
  search,
};
