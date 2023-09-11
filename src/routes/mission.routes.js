import { Router } from "express";
import {
  getAllMissions,
  getAllMissionsByLevelId,
  getMission,
  postMission,
} from "../controllers/mission.controller.js";

const routerMission = Router();

routerMission.get("/", getAllMissions);
routerMission.get("/level/:id", getAllMissionsByLevelId);
routerMission.get("/:id", getMission);
routerMission.post("/", postMission);

export { routerMission };
