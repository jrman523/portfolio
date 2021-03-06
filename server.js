const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/html-routes")(app);

//starting the server
app.listen(PORT, function () {
    console.log(
        `==> 🌎  Listening on ${PORT} . Visit http://localhost:${PORT}/ in your browser.`
    );
});

// axios.get("https://www.google.com/").then(function (res) {
//     setInterval(function () {
//         console.log(`the response status is ${res.status} its alive`);
//     }, 50000);
// })
//     .catch(function (err) {
//         console.log(`this broke it : ${err}`);
//     });

module.exports = app;