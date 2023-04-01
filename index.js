const express = require("express");
const urlRoute = require("./routes/urlRoute");
const homeRoute = require("./routes/homeRoute");



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));

app.use('/urlapi',urlRoute);
app.use('/',homeRoute);





const PORT = 1221;

app.listen(PORT,()=>{
    console.log("App is running");
})