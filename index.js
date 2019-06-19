let express = require('express')
let app = express();
var port = process.env.PORT || 3000;
let apiRoutes = require("./routes/index")

app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Sendgrid connector running on Port: " + port);
});