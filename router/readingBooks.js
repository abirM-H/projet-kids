const express = require("express");
const router = express.Router();
const readingBooks = require("../models/readingbooks");

router.get("/", (req, res) => {
    readingBooks
    .find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

module.exports = router;
