require("dotenv").config();

const express = require("express");

const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());

app.use("/api", indexRouter);

// Start the server
app.listen(5000, () => {
  console.log("Express server listening on port 5000");
});
