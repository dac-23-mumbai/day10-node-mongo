import express from "express";
const app = express();

function main(req, res) {
  // return "some message";
  res.send("some message...!")
}

// http://loaclhost:4000/main
app.get("/main", main);

// http://loaclhost:4000
app.listen(4000);
