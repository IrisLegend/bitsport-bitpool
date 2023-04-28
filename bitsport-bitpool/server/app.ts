import { SERVER_PORT } from "./config";
import express from "express";
// import morgan from "morgan";
import cors from "cors";

import passport from "passport";
import middlewarePassport from "./service/passport";

import apiRoutes from "./routes/api.routes";

const app = express();

//Settings
app.set("port", SERVER_PORT);

//Middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Passport
app.use(passport.initialize());
passport.use(middlewarePassport);

//Routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send(`The API is at http://127.0.0.1:${app.get("port")}`);
});

export default app;
