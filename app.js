const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const PORT = 3000

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
});

