const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000

app = express()
app.use(bodyParser.urlencoded({extended: true}));



app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`)
});

