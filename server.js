let express = require("express");
let app = express();
let reloadMagic = require("./reload-magic.js");

reloadMagic(app);

app.use("/", express.static("build")); // Needed for the HTML and JS files
app.use("/static", express.static("public")); // Needed for local assets

// Your endpoints go after this line

// Your endpoints go before this line

app.all("/*", (req, res, next) => {
  // needed for react router
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
