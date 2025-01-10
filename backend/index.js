const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 5001;

// To send data in jason or request we have to use middleware as below.
app.use(express.json());

//Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
