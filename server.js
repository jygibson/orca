var express = require("express");
var db = require('./models');


var PORT = process.env.PORT || 3000;
var app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/api-routes")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("listening on port", PORT)
    });
});