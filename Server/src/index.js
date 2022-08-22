const express = require("express");
const connect = require("./config/db");
const userController = require("./controllers/user.controller");
const noticeBoardController = require("./controllers/noticeBoard.controller");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

// api endpoints for users and noticeboards
app.use("/users", userController);
app.use("/noticeBoards", noticeBoardController);

// sample to check server is running or not!!
app.get("", async (req, res) => {
  try {
    return res.send("Aa gya swaad??");
  } catch (error) {
    return res.send(error.message);
  }
});

// define a port to use
const port = process.env.PORT || 4000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Sun rha hoon ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
