import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

// router
import RequestMockApiRouter from "./routes/requestMockAPi";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", RequestMockApiRouter);

export default app;
