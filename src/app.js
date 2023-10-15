const express = require("express");

const app = express();
require("./db/connection");

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello from the server");
})

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})