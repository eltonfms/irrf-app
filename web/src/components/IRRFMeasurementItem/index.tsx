import React from 'react';

import './styles.scss';

export interface Employee {
  id: number,
  name: string,
  avatar: string,
  cpf: string,
  salary: number,
  social_security_discount: number,
  number_dependents: number
}

interface IRRFMeasurementItemProps {
  employee: Employee,
  irrf_discount: number
}

const IRRFMeasurementItem: React.FC<IRRFMeasurementItemProps> = ({ employee, irrf_discount }) => {
  return (
    <article className="irrfmeasurement-item">
      <header className="irrfmeasurement-item__header">
        <div className="irrfmeasurement-item__photo">
          {employee.avatar && (
            <img src={employee.avatar} alt={employee.name} />
          )}
        </div>
        <div>
          <h3>{employee.name}</h3>
          <span>CPF: <b>{employee.cpf}</b></span>
        </div>
      </header>
      <main className="irrfmeasurement-item__main">
        <div className="irrfmeasurement-item__data">
          <p>
            Salário
            <strong>R$ {employee.salary}</strong>
          </p>
          <p>
            Desconto
            <strong>R$ {employee.social_security_discount}</strong>
          </p>
          <p>
            Dependentes
            <strong>{employee.number_dependents}</strong>
          </p>
        </div>
        <div className="irrfmeasurement-item__value">
          <p>
            Desconto IRRF<br />
            <strong><span>R$ {(irrf_discount).toFixed(2)}</span></strong>
          </p>
        </div>
      </main>
    </article>
  )
}

export default IRRFMeasurementItem;
