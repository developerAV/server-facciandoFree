import UserModel from "../models/user.models.js";

/* const crearProductos = async (req, res) => {
  try {
    const body = req.body;
    body.fecha = new Date();
    body.idCategoria = mongo.ObjectId(body.idCategoria);
    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    return res.status(201).json(productoNuevo);
  } catch (error) {
    return res.json(error);
  }
};
 */
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
  const { name, date_birth, school } = req.body; 

  try {
  
    const userUpdate = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        date_birth: new Date(date_birth),
        school,
      },
      { new: true }
    ); // { new: true } devuelve el usuario actualizado en lugar del antiguo

    if (!userUpdate) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(200).json(userUpdate);
  } catch (error) {
    // Manejo de errores
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await userModel.findByIdAndDelete(id);
    res.json(userDelete);
  } catch (error) {
    res.json(error);
  }
};

/* 
const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...body } = req.body;

    const productoModificado = await Producto.findByIdAndUpdate(id, body);

    res.json(productoModificado);
  } catch (error) {
    res.json(error);
  }
  
  
  const borrarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id);
    res.json(productoEliminado);
  } catch (error) {
    res.json(error);
  }
};
*/
