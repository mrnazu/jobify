const express = require("express");
const app = express();

// Routes
const authRouter = require("../routes/AuthRoute");
const jobRouter = require("../routes/JobsRoute");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

// Swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// DB
const connectDB = require("../config/DBconnect");
const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI).then(console.log('db connected'));
    } catch (error) {
      console.log(error);
    }
  };
  

module.exports = { app, start };
