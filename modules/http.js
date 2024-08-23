import { createServer } from "http";

const server = createServer((request, response) => {
  response.write("Hello sam");

  response.end();
});

server.listen(5000, () => {
  console.log("Server running at port 5000...");
});
