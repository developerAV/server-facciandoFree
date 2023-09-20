import UserModel from "../models/user.models.js";
import { MISSIONS } from "../utils/constants.js";
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
export const getFirst10UsersByScore = async (req, res) => {
  try {
    const users = await UserModel.find().sort({ score: -1 }).limit(10);
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
export const getUserByIdFirebase = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.find({ idUserFirebase: id });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const postUser = async (req, res) => {
  let body = req.body;
  body.missions = MISSIONS;
  const date_birth = new Date(body.date_birth);

  try {
    const user = new UserModel({ ...body, date_birth });
    const newUser = await user.save();

    return res.status(201).json(newUser);
  } catch (error) {
    return res.json(error.message);
  }
};

export const putUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const { date_birth } = req.body;

  if (date_birth) body.date_birth = new Date(date_birth);
  try {
    const userUpdate = await UserModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!userUpdate) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json(userUpdate);
  } catch (error) {
    return res.status(500).json({ error: error.message });
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
