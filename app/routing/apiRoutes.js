//require server and html
var htmlRoutes = require("../routing/htmlRoutes")
var friendsData = require("../data/friends")

module.exports = function (app) {


    app.get("api/friends", function (req, res) {
        var chosen = req.params.friends
        console.log(friends)

        return res.json(false);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);

    });

}