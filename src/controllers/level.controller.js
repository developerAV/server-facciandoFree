import Level from "../models/level.models.js";

export const getAllLevels = async (req, res) => {
  try {
    const levels = await Level.find();
    return res.status(200).json(levels);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};



export const getLevel = async (req, res) => {
  const { id } = req.params;
  try {
    const level = await Level.findById(id);
    if (!level) {
      return res.status(404).json({ message: "nivel no encontrado" });
    }
    return res.status(200).json(level);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const postLevel = async (req, res) => {
  let body = req.body;

  try {
    const level = new Level(body);
    const newLevel = await level.save();

    return res.status(201).json(newLevel);
  } catch (error) {
    return res.json(error.message);
  }
};
