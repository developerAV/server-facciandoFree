import { Router } from "express";
import { postEmployee, putEmployee, deleteEmployee,getAllEmployees, getEmployee } from "../controllers/employee.controllers.js";
const routerEmployee = new Router();

//routerEmployee.post("/", postEmployee);
routerEmployee.put("/:id", putEmployee);
routerEmployee.delete("/:id", deleteEmployee);

//get all employees
routerEmployee.get("/", getAllEmployees);

//get all employees by id
routerEmployee.get("/:id", getEmployee);

//get all employees by ocupation
export { routerEmployee };

