import express from "express";
import router from "./router/authRouter.js";
const app = express();
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`surver is running on Port ${PORT}`);
});

export default app;
