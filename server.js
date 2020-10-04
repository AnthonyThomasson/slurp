var express = require("express");
const { exit } = require("process");
var app = express();
var http = require("http").createServer(app);

app.use(
  "/public/TemplateData",
  express.static(__dirname + "/public/TemplateData")
);
app.use("/public/Build", express.static(__dirname + "/public/Build"));
app.use(express.static(__dirname + "/public"));

// listen for communication
let port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log("listening on *:" + port);
});
