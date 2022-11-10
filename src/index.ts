import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.route("/api/todos").get(async (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(
    `Express server running on port ${PORT} in ${
      process.env.NODE_ENV || "development"
    }`
  );
});
