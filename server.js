import { app } from "./app.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server connected on http://localhost:${PORT}`);
});
