const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT | 3001;

//intilaizing app with express package
const app = express();

const DB ="mongodb+srv://Akhilesh:akhiakhi1621@cluster0.detn6vd.mongodb.net/?retryWrites=true&w=majority";

//connecting mongoDB database
mongoose.connect(DB).then(() => {
    console.log("connection successfull!");
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
   
});