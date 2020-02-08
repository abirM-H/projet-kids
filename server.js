const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport')
const app = express();

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//passport Midleware
app.use(passport.initialize());
require("./middleware/passport")(passport);

// connect db
const mongoURI = "mongodb://localhost:27017/kids";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true ,UsecreateIndexes: true})
  .then(() => console.log("mongodb connected ..."))
  .catch(err => console.log(err));

//API route

app.use("/video", require("./router/educationVideos"));
app.use("/educationgames", require("./router/educationGames"));
app.use("/readingbooks", require("./router/readingBooks"));
app.use("/movie", require("./router/movie"));
app.use("/listningbooks", require("./router/listningbooks"));
app.use("/games", require("./router/games"));
app.use('/user',require('./router/user'))
//run server
const port = process.env.PORT || 5000;
app.listen(port, err =>
  !err ? console.log("server is running on port 5000") : console.log("error")
);
