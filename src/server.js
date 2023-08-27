import express, { Router, json } from "express";
import cors from "cors";
import { dbConnection } from "./database/index.js";

import { routerUser } from "./routes/user.routes.js";
//demas 

class Server {
  constructor() {
    this.app = Router();
    this.router = Router();

    this.port = process.env.PORT || 5000;
    this.paths = {
      user: "/user",
    };
    this.conectarDB();
    this.middlewares();
    this.routes();
    this.router.use("/facciando", this.app);
    this._express = express().use(this.router);
  }
  async conectarDB() {
    await dbConnection();
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(json());
  }
  routes() {
    this.app.use(this.paths.user, routerUser);
  }
  listen() {
    this._express.listen(this.port);
  }
}

export default Server;
