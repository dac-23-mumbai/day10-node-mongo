import express from "express";
const app = express();

function main(req, res) {
  res.send("Hello");
}

app.get("/main", main);

app.get("/first", (req, res) => res.send("Hello World"));

app.get("/second", (req, res) => {
  res.send("Hello SEcond!!");
});

// http://loaclhost:4000
app.listen(4000);
