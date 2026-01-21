const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({ success: true, message: "Login Successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid Credentials" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
