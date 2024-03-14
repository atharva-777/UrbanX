import { app } from "./app";
import { pool, client } from "./config/dbConfig";

pool
  .connect()
  .then(async () => {
    console.log("Connected to PostgreSQL database");
    console.log((await pool.query("SELECT * FROM cart")).rows);
    // await pool.end();
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Urbanx server is listening on port http://localhost:${port}`);
});
