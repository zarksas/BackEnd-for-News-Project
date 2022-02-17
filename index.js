/* eslint-disable import/no-unresolved */
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json());
// eslint-disable-next-line import/extensions
app.use(require("./routes"));

mongoose
  .connect(
    "mongodb+srv://Yasin:yas565445@cluster0.6nddj.mongodb.net/NewsProect"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
