const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config();

// mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", function (err) {
  throw err;
});
db.once("open", function callback() {
  console.log("connected!");
  // db.close();
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// middleware
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/post", postRoute)

app.listen(8800, () => {
  console.log("Backend Server is running!");
});
