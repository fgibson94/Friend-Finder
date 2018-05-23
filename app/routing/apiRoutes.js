var friends = require('../data/friends.js')
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
var totalFriends = [];
module.exports = function (app) {

    app.get('api/friends', function (req, res) {
        return res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post('/api/friends', function (req, res) {
        //logic and validate
        checkForm(req, res)
    });

    //Declare functions

    function checkLength(req, res) {
        //all fields sumbitted?
        //Add to list of friends

    }
}