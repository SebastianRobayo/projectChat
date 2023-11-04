import "dotenv/config";
import express from "express";
import db from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 5000;

db()
  .then(() => {
    console.log("Successful connection");
  })
  .catch((e) => {
    console.log(`The connection failed: ${e}`);
  });

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 🚀`);
});
