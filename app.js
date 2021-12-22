const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function(req, res){
  res.send("Hello");
})
app.get("/carnet/vacunacion/ef43fad1344f51/holyoak/yolanda", function (req, res) {
  res.sendFile(__dirname +"/public/"+"mama.html");
});
app.get("/carnet/vacunacion/ef43fad1344f51/peralta/jesus", function (req, res) {
  res.sendFile(__dirname +"/public/"+"papa.html");
});
app.get("/carnet/vacunacion/ef43fad1344f51/peralta/alexis", function (req, res) {
  res.sendFile(__dirname +"/public/"+"alexis.html");
});
app.get("/carnet/vacunacion/ef43fad1344f51/peralta/diana", function (req, res) {
  res.sendFile(__dirname +"/public/"+"diana.html");
});
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));