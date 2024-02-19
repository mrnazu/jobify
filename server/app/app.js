const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

require("dotenv").config();
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// Swagger setup
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});

// Routes
const authRouter = require("../routes/AuthRoute");
const jobRouter = require("../routes/JobsRoute");

// error handler
const notFoundMiddleware = require("../middleware/notFound");
const errorHandlerMiddleware = require("../middleware/errHandler");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

// DB
const connectDB = require("../config/DBconnect");
const authenticateUser = require("../middleware/Auth");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = { app, start };
