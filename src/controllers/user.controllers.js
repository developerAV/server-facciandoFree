import UserModel from "../models/user.models.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const postUser = async (req, res) => {
  let { idUserFirebase, name, date_birth, school } = req.body;

  date_birth = new Date(date_birth);

  try {
    const user = new UserModel({
      idUserFirebase,
      name,
      date_birth,
      school,
    });
    const newUser = await user.save();

    return res.status(201).json(newUser);
  } catch (error) {
    return res.json(error);
  }
};

export const putUser = async (req, res) => {
  const { id } = req.params;
  const { name, school, levelCompleted, actualLevel, actualMission } = req.body;
  try {
    const userUpdate = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        school,
        levelCompleted,
        actualLevel,
        actualMission,
      },
      { new: true }
    );

    if (!userUpdate) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(userUpdate);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await UserModel.findByIdAndDelete(id);
    res.json(userDelete);
  } catch (error) {
    res.json(error);
  }
};
