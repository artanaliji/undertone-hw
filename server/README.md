# How to Start the Undertone Task API

## Prerequisites

- Node.js (v14 or higher)
- npm package manager

## Installation

1. Clone the repository to your local machine.
2. Open your terminal and navigate to the project directory (server).
3. Install the dependencies by running the following command:
   ```
   npm install
   ```
4. Create a `.env` file in the root of the project and add the following environment variables:
   - NODE_ENV: "production" or "development" or "test"
   - REDDIT_BASE_URL: the base URL for the Reddit API (e.g. `REDDIT_BASE_URL=https://www.reddit.com/search.json`)
5. Start the server by running the following command:
   ```
   npm start
   ```

## Swagger Documentation

The API documentation is available at `/api-docs` endpoint. You can access it in your browser after starting the server by navigating to `http://localhost:<PORT>/api-docs`.

## Testing

You can run the test suite by running the following command:

```
npm test
```
