const express = require("express");
const validate = require("../middlewares/validate");
const { searchValidation } = require("../validations");
const { searchController } = require("../controllers");

const router = express.Router();

router.route("/").get(validate(searchValidation.searchSchema), searchController.search);

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search for posts on Reddit
 *     description: Retrieve a list of posts that match the specified search criteria.
 *     parameters:
 *       - name: text
 *         description: The search query text
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *       - name: sort
 *         description: The sorting criteria for the search results
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of search results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SearchResult'
 */
module.exports = router;
