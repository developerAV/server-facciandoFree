import Employee from "../models/employee.models.js";


//get all employees
export const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  //get all employees by id
  export const getEmployee = async (req, res) => {
    const { id } = req.params;
    try {
      const employee = await Employee.findById(id);
      if (!employee) {
        return res.status(404).json({ message: " no encontrado" });
      }
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };



export const postEmployee = async (req, res) => {
    let { name, age, status, description } = req.body;
    
    try {
      const employee = new Employee({
        name,
        age,
        status,
        description,
      });
      const newEmployee = await employee.save();
  
      return res.status(201).json(newEmployee);
    } catch (error) {
      return res.json(error);
    }
  };



  export const putEmployee = async (req, res) => {
    const { id } = req.params; 
    const { name, age, status, description }  = req.body; 
  
    try {
    
      const employeeUpdate = await Employee.findByIdAndUpdate(
        id,
        {
          name,
          age,
          status,
          description,
        },
        { new: true }
      ); // { new: true } devuelve el usuario actualizado en lugar del antiguo
  
      if (!employeeUpdate) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      return res.status(200).json(employeeUpdate);
    } catch (error) {
      // Manejo de errores
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  export const deleteEmployee = async (req, res) => {
    try {
      const { id } = req.params;
      const employeeDelete = await Employee.findByIdAndDelete(id);
      res.json(employeeDelete);
    } catch (error) {
      res.json(error);
    }
  };