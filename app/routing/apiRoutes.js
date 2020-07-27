var friends = require("../data/friends");

module.exports = function(app) {

// Displays all friends
app.get("/data/friends", function(req, res) {
    return res.json(friends);
  });

  // Create new survey results
app.post("/data/friends", function(req, res) {
    var bestMatch = {name: "", photo: "", difference: 1000},
    newSurvey = req.body,
    newName = newSurvey.name,
    newScores = newSurvey.scores,
    scoreDifference;
   
    }