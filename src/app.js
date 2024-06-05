const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");



const app = express();

// Cors Policy Credentials
app.use(cors({
    origin: process.env.CORS_ORIGIN || 8080,
    credentials: true
}))

//body parser with JSON
app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended: true, limit: "20kb"}))
app.use(express.static("public"));
app.use(cookieParser());

//routes Links 
app.use("/api/v1/users", require("./routes/user.routes"));
app.use('/api/v1/post', require('./routes/post.routes'));
app.use('/api/v1/category', require('./routes/category.routes'));
//http://localhost:8080/api/v1/users


module.exports = app;
