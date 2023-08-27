import { Router } from "express";
import { postUser } from "../controllers/user.controllers.js";
const routerUser = new Router();

routerUser.post("/", postUser);
//routerUser.put("/:id", putUser);

export { routerUser };
