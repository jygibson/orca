var db = require("../models");


module.exports = function (app) {
    app.post("/api/signup", function (req, res) {
        console.log("new member", req.body);
        db.Member.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            type: req.body.memberType,
            disabilityType: req.body.disabilityType,
            agreement: req.body.agreement,
        })
        .then(function(dbPost){
            res.send(dbPost);
        });
    });
}