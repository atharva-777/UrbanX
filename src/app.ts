import { Express } from "express";
import express from "express";

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Ecom Backend");
});

app.listen(port, () => {
  console.log(`server is listening on http://localhost:8000`);
});
