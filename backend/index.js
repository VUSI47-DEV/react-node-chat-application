const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PRIVATE_KEY = "4695be66-415f-4067-bf4b-092373e2d0c3"; // create users
const PROJECT_ID = "3adafe77-cdc9-4409-9f2a-5b37c7121cfd"; 

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  // return res.json({ username: username, secret: "sha256..." });
});

// app.listen(3001, () => {
//   console.log("server running on port 3001");
// },);

app.listen(3001, () => {
  console.log("Server running at port : 3001");
});