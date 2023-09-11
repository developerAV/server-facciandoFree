import Mission from "../models/mission.models.js";

export const getAllMissions = async (req, res) => {
  try {
    const missions = await Mission.find();
    return res.status(200).json(missions);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
export const getAllMissionsByLevelId = async (req, res) => {
  const { id } = req.params;
  try {
    const missions = await Mission.find({ levelId: id });
    return res.status(200).json(missions);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
export const getMission = async (req, res) => {
  const { id } = req.params;
  try {
    const mission = await Mission.findById(id);
    if (!mission) {
      return res.status(404).json({ message: "Mision no encontrada" });
    }
    return res.status(200).json(mission);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const postMission = async (req, res) => {
  let body = req.body;

  try {
    const mission = new Mission(body);
    const newMission = await mission.save();

    return res.status(201).json(newMission);
  } catch (error) {
    return res.json(error.message);
  }
};
