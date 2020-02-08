//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("index", {
    info: ""
  });
});


app.post("/", function(req, res) {
  let text = req.body.input;


  if ( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) === false) {
    res.render("index", {
      info: "Please provide a valid email."
    });
    console.log("failed");
  } else {
    res.render("index", {
      info: "Thank you!"
    });
  }

  res.redirect("/");
  // var post = {
  //   titleText: title,
  //   textSection: text
  // };
  //
  // posts.push(post);
  //
  // for (var i = 0; i < posts.length; i++) {
  //   console.log(posts[i].titleText);
  // }

});



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 4000");
});
