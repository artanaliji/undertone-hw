const { searchService } = require("../services");

describe("redditSearch function", () => {
  it("should return an object with data property that contains an array of children", async () => {
    const results = await searchService.redditSearch("test", "new");
    expect(typeof results).toBe("object");
    expect(Array.isArray(results.data.children)).toBe(true);
  });
});
