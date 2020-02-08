const express = require("express");
const router = express.Router();
const mv = require("../models/movie");

router.get("/", (req, res) => {
  mv.find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

module.exports = router;
