var friends = require("../data/friends.js")

module.exports = function (app){

app.get("/api/friends", function(req,res){

    res.json(friends)
})

app.post('/api/friends', function(req, res) {

    var userInput = req.body;
    var userAnswer = userInput.scores;
    var matchName = '';
    var matchEmail = '';
   
   
   
   
    friends.push(userInput);
