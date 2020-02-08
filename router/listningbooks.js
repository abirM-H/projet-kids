const express = require("express");
const router = express.Router();
const  Listningbooks  = require("../models/listningbooks");

router.get("/", (req, res) => {
  Listningbooks .find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

module.exports = router;
