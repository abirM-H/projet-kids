const express = require("express");
const router = express.Router();
const EdVid = require("../models/educationVideos");

router.get("/", (req, res) => {
  EdVid.find()
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

// router.post("/", (req, res) => {
//   const newVid = new EdVid({
//     url: req.body.url,
//     theme: req.body.theme,
//     titre: req.body.titre,
//     agemin: req.body.agemin,
//     agemax: req.body.agemax,
//     favorite: req.body.favorite,
//     lang: req.body.lang
//   });
//   newVid.save()
//     .then(data => res.json(data))
//     .catch(err => res.send(err));
// });

module.exports = router;
