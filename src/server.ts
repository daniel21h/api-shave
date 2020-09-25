import express from "express";

const server = express();

server.get("/", (request, response) => {
  return response.json({ message: "Hello GoStack" });
});

server.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
