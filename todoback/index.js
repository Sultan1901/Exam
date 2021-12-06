const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
dotenv.config();
require("./db");


app.use(morgan("dev"));

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());




const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
});
