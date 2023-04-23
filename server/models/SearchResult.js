class SearchResult {
  constructor(data) {
    this.author = data.author;
    this.url = data.url;
    this.title = data.title;
    this.selfText = data.selftext;
    this.thumbnail = data.thumbnail && data.thumbnail !== "self" ? data.thumbnail : data.preview && data.preview.images[0].source.url;
  }
}

module.exports = SearchResult;
