import { createServer } from "http";

const server = createServer((request, response) => {
  // response.setHeader("Content-Type", "application/json");
  // response.statusCode = 500;

  if (request.url === "/") {
    response.end("Home page");
  } else if (request.url === "/about") {
    response.end("About page");
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});

server.listen(5000, () => {
  console.log("Server running at port 5000...");
});
