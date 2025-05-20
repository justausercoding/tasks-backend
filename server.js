import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server conneted on http://localhost:${PORT}`);
});
