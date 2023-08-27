import express, { Router, json } from "express";
import cors from "cors";
import { dbConnection } from "./database/index.js";

import { routerUser } from "./routes/user.routes.js";
import { routerEmployee } from "./routes/employee.routes.js";
//demas 

class Server {
  constructor() {
    this.app = Router();
    this.router = Router();

    this.port = process.env.PORT || 5000;
    this.paths = {
      user: "/user",
      employee: "/employee",
      // user: "/user/:id",
      //añadir los demas paths

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
    this.app.use(this.paths.employee, routerEmployee);
    
    //añadir las demas rutas
  }
  listen() {
    this._express.listen(this.port);
  }
}

export default Server;
