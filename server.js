var express = require("express");
var path = require("path");
var fs = require("fs");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});


app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/Develop/db/db.json"));
});


app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    res.json(newNote);
});


app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});


app.get("/api/characters", function(req, res) {
    return res.json(characters);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});