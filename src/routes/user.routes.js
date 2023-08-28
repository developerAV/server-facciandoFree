import { Router } from "express";
import {
  postUser,
  putUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.controllers.js";
const routerUser = new Router();

routerUser.post("/", postUser);
routerUser.get("/", getAllUsers);
routerUser.get("/:id", getUser);
routerUser.put("/:id", putUser);
routerUser.delete("/:id", deleteUser);

export { routerUser };
