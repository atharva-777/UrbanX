import { app } from "./app";
// import { client, pool } from "./config/dbConfig";
import connect from "./config/dbConfig";
connect();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Urbanx server is listening on port http://localhost:${port}`);
});
