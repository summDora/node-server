
var express = require("express");
/* var express = require("C:/Users/qingcheng/AppData/Roaming/npm/express"); */
var app = express();
app.use(express.static("public")).listen(8090);