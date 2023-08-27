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
