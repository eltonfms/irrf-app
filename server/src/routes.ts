import express from 'express';
import EmployeesControler from './controllers/EmployeesController';

const routes = express.Router();
const employeesControllers = new EmployeesControler();

routes.get('/employees', employeesControllers.index);
routes.get('/employees-filter', employeesControllers.indexFilter);
routes.post('/employees', employeesControllers.create);

export default routes;
