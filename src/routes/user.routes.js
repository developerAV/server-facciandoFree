import { Router } from "express";
import { postUser, putUser, deleteUser } from "../controllers/user.controllers.js";
const routerUser = new Router();

routerUser.post("/", postUser);
routerUser.put("/:id", putUser);
routerUser.delete("/:id", deleteUser);

export { routerUser };
