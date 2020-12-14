const express = require("express");
const app = express();


app.post("/add",function(req,res){
    var playlistName = (req.body.playlistName).toLowerCase();
    res.redirect("/add/"+playlistName);
});
app.get("/",function(req,res){
    res.render("index.html");
});
app.listen(8000,function(){
    console.log("Server Is Running");
});