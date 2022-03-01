const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  console.log("Connected to React");
  res.send("Hello World!");
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));