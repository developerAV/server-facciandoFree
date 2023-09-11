import { Router } from "express";
import {
  postLevel,
  getAllLevels,
  getLevel,
} from "../controllers/level.controller.js";
const routerLevel = new Router();

routerLevel.post("/", postLevel);
routerLevel.get("/", getAllLevels);
routerLevel.get("/:id", getLevel);

export { routerLevel };
