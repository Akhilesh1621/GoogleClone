const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const cors = require ("cors");

const PORT = process.env.PORT | 3001;

//intilaizing app with express package
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const DB ="mongodb+srv://Akhilesh:akhiakhi1621@cluster0.detn6vd.mongodb.net/?retryWrites=true&w=majority";


//, Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, and all other fields will not be saved (if some other fields are sent).

mongoose.set("strictQuery", false);

//connecting mongoDB database
mongoose.connect(DB).then(() => {
    console.log("connection successfull!");
}).catch((err) => {
    console.log(err);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connectedd at port ${PORT}`);
   
});