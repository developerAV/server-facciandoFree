import { Router } from "express";
import {
  postUser,
  putUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserByIdFirebase,
  getFirst10UsersByScore
} from "../controllers/user.controllers.js";
const routerUser = new Router();

routerUser.post("/", postUser);
routerUser.get("/", getAllUsers);
routerUser.get("/top10", getFirst10UsersByScore);
routerUser.get("/:id", getUser);
routerUser.get("/firebase/:id", getUserByIdFirebase);
routerUser.put("/:id", putUser);
routerUser.delete("/:id", deleteUser);

export { routerUser };
