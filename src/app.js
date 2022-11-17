const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;


// public static page path
const static_path = path.join(__dirname , "../public");

app.use(express.static(static_path))


//routing
app.get("/", (req,res) => {
    res.send("hello");
})

app.get("/about", (req,res) => {
    res.send("about");
})

app.get("/weather", (req,res) => {
    res.send("weather");
})

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/error.html"));
    // res.send("404 error")
})

app.listen(port ,  () =>{
    console.log("listening to port no 8000")
})