import express from "express";
import render from './render/render'
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  
  res.send(render(req));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("app listening on" + PORT));
