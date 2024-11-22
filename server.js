var express = require("express");
var server = express();

//web root
server.use(express.static(__dirname+"/AgencyProject"));


server.get("/profolio", (req, res)=>{
    res.send("profolio")
})

server.listen(80, ()=>{
    console.log("server is running at port 80.");
})