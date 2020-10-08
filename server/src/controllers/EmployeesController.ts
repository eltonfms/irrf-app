import {Request, Response} from 'express';

import db from '../database/connection';

export default class EmployeesControler {
  async index(request: Request, response: Response) {
    const employees = await db('employees')

    return response.json(employees);
  }

  async indexFilter(request: Request, response: Response) {
    const filters = request.query;
    const name = filters.name as string;

    if (!filters.name) {
      return response.status(400).json({
        error: 'Missing filters to search employees.'
      });
    }

    const employees = await db('employees')
      .where('employees.name', '=', name)

    return response.json(employees);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      cpf,
      salary,
      social_security_discount,
      number_dependents
    } = request.body;
  
    const trx = await db.transaction();
  
    try {
      await trx('employees').insert({
        name,
        avatar,
        cpf,
        salary,
        social_security_discount,
        number_dependents
      });
    
      await trx.commit();
  
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      });
    }
  }
}
