import express from "express";
import { checkConnection } from "./src/config/db.js";

const app = express();
const PORT = process.env.PORT;

checkConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});