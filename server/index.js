require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
port = process.env.PORT;

const app = express();
app.use(cors());

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });
}

app.listen(port, () => {
  console.log(`server running succesfully on ${port}`);
});
