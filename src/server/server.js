import express, { Router, json } from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import { dbConnection } from '../database/index.js';

import { routerUser } from '../routes/user.routes.js';
import { routerEmployee } from '../routes/employee.routes.js';
import { routerLevel } from '../routes/level.routes.js';
import { routerMission } from '../routes/mission.routes.js';
import { routerForum } from '../routes/forum.routes.js';
import socketManager from './socketManager.js';

class ServerApp {
  constructor() {
    this.app = express();
    this.router = Router();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);

    this.port = process.env.PORT || 3000;
    this.paths = {
      user: '/facciando/user',
      employee: '/facciando/employee',
      level: '/facciando/level',
      mission: '/facciando/mission',
      forum: '/facciando/forum',
    };

    this.conectarDB();
    this.middlewares();
    this.routes();
    this.sockets();
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
    this.app.use(this.paths.level, routerLevel);
    this.app.use(this.paths.mission, routerMission);
    this.app.use(this.paths.forum, routerForum);
  }

  sockets() {

    socketManager(this.io);
   
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

export default ServerApp;
