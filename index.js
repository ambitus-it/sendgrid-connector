let express = require('express')
let app = express();
var port = process.env.PORT || 3000;
let apiRoutes = require("./routes/index")

app.use('/api', apiRoutes)

app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
   });
   

app.listen(port, function () {
     console.log("Sendgrid connector running on Port: " + port);
});