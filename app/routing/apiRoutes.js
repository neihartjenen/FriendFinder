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
    
    for(var f = 0; f < friends[i].scores[f]; f++) {
        console.log(friends[i].name);
        scoreDifference = 0;
        for(var f = 0; f < friends[i].scores[f]; f++) {
            scoreDifference += Math.abs(parseInt(newScores[f]) - parseInt(friends[i].scores[f]));
            if(scoreDifference <= bestMatch.difference) {
              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.difference = scoreDifference;
            }
          }
        }
    
        // Pushs survey data to friends
        friends.push(newSurvey);
        res.json(bestMatch);
      });
    };
        