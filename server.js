
const express = require("express");
const connectDB = require("./config/db")

const app = express();

//Database connection
connectDB();

//Initialize Middleware
app.use(express.json( { extended: false } ));

app.get("/", (req, res)=> {
    res.send("Running");
})

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/companyclosure", require("./routes/forms/companyclosure"));


 app.listen("3001", ()=> {
     console.log("Server started on port 3001");
 });