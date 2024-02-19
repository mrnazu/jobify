const express = require('express');
const app = express();

module.exports = app;

// Routes
const authRouter = require('../routes/AuthRoute');
const jobRouter = require('../routes/JobsRoute');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobRouter);