import React, { useEffect, useState } from 'react';
//import { useDispatch } from 'react-redux';

import PageHeader from '../../components/PageHeader';
import IRRFMeasurementItem, { Employee } from '../../components/IRRFMeasurementItem';

import api from '../../services/api';
import calculateIRRFDiscount from '../../utils/calculateIRRFDiscount';

import './styles.scss';

function IRRFMeasurement() {
  const [employees, setEmployees] = useState([]);

  const listEmployees = async () => {
    const response = await api.get('employees');
    setEmployees(response.data);
  }

  useEffect(() => {
    listEmployees();
  },[]);

  return (
    <div className="irrfmeasurement-list">
      <PageHeader title="Tabelas e cálculos do IRRF">
        <p>
          A tabela do IR é um dos principais instrumentos para auxiliar os contribuintes na hora de enviar as informações fiscais para a Receita. Afinal, é nesse documento que constam as alíquotas do Imposto de Renda.
          <br />
          <br />
          Isso quer dizer que é essa a fonte para você saber qual é o percentual que deve ser aplicado sobre os seus rendimentos. Portanto, na hora de fazer o cálculo e declarar seus rendimentos, ter essa tabela é fundamental para que você não envie nenhum dado errado e, consequentemente, não caia na malha fina.
        </p>
      </PageHeader>
      <main className="irrfmeasurement-list__main">
        <div className="wrapper">
          {/* employees
            .sort(({ id: previousID }, { id: currentID }) => previousID - currentID)
            .map((employee: Employee) => {
              return <IRRFMeasurementItem employee={employee} key={employee.id} />;
            })
          */}
          { employees
            .map((employee: Employee) => {
              const irrfDiscount: number = Number(calculateIRRFDiscount(
                employee.salary,
                employee.social_security_discount,
                employee.number_dependents
              ));

              return (
                <IRRFMeasurementItem
                  employee={employee}
                  irrf_discount={irrfDiscount}
                  key={employee.id}
                />
              );
            })
          }
        </div>
      </main>
    </div>
  )
}

export default IRRFMeasurement;
