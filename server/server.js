const http = require('http');
const app = require("./app/app");
require("dotenv").config();

// setting up a PORT
const PORT = process.env.PORT || 3001;

// starting up a server
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is running on port ${PORT}`));
