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

app.post("/", function(req, res){
    const data = req.body;
    const fName = data.firstName;
    const lName = data.lastName;
    const email = data.email;

    console.log(`You provided: Name ${fName} ${lName} and email is ${email}`)


    res.sendFile(__dirname+"/signup.html")
})




app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
});

