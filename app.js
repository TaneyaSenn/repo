const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("hi")
})

app.listen(port, function(){
    console.log(`App listening on port ${port}`)
});