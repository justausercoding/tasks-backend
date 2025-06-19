import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

export { app };
