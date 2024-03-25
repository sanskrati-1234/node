import express from "express";
import todoRoutes from "./routes.js";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app); // Create HTTP server with Express app

app.use(express.json());
app.use(cors({ origin: true, credentials: true })); // Set CORS policy for Express routes
app.use("/todo", todoRoutes);


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const io = new Server(server, {
    cors: { origin: "http://127.0.0.1:5173", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
    console.log(`a user connected ${socket.id}`);
    
    socket.on("send_message", (data) => {
      socket.broadcast.emit("receive_message", data);
    });
});

server.listen(3000, () => {
    console.log("Express server listening on *:3000");
});
