import { Router } from "express";
import { postForum,  getAllForums, getForum, putForumC } from "../controllers/forum.controllers.js";

const routerForum = new Router();

routerForum.post("/", postForum);
routerForum.put("/:id", putForumC);
// routerForum.delete("/:id", deleteForum);

//get all forums
routerForum.get("/", getAllForums);

//get all forums by id
routerForum.get("/:id", getForum);

//get all forums by ocupation

export { routerForum };
