const app = require("../app");
require("dotenv").config(); // Load environment variables
const http = require("http");

const PORT = process.env.PORT || 1234;

// Create the server and listen
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Error handler for listening errors
server.on("error", (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  if (error.code === "EACCES") {
    console.error(`Port ${PORT} requires elevated privileges`);
    process.exit(1);
  } else if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    throw error;
  }
});
