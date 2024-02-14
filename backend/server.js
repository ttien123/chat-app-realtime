import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import massageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", massageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server port ${PORT}`);
});
