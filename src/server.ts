import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "First API with TypeScript ",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("[HTTP] Server is listening on port [::]:%s", PORT);
});
