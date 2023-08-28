import { Router } from "express";
import { postEmployee, putEmployee, deleteEmployee } from "../controllers/employee.controllers.js";
const routerEmployee = new Router();

//routerEmployee.post("/", postEmployee);
routerEmployee.put("/:id", putEmployee);
routerEmployee.delete("/:id", deleteEmployee);

//get all employees

//get all employees by id

//get all employees by ocupation
export { routerEmployee };

