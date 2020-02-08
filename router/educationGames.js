const express = require("express");
const router = express.Router();
const games = require("../models/educationGames");

router.get("/", (req, res) => {
  games
    .find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

module.exports = router;
