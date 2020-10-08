import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import api from '../../services/api';

import './styles.scss';

function EmployeeForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [cpf, setCPF] = useState('');
  const [salary, setSalary] = useState('');
  const [discount, setDiscount] = useState('');
  const [dependents, setDependents] = useState('');

  function handleCreateEmployee(e: FormEvent) {
    e.preventDefault();

    api.post('employees', {
      name,
      avatar,
      cpf,
      salary: Number(salary),
      social_security_discount: Number(discount),
      number_dependents: Number(dependents)
    })
    .then(() => {
      history.push('/tabelas-calculos-irrf');
    })
    .catch(() => {
      console.log('erro')
    });
  }

  return (
    <div className="employee-list">
      <PageHeader title="Registrar Funcionário" />
      <main className="employee-list__main">
        <div className="wrapper">
          <form onSubmit={handleCreateEmployee}>
            <fieldset>
              <legend className="employee-legend">Dados do novo funcionário</legend>
              <Input 
                label="Nome"
                name="name"
                onChange={(e) => { setName(e.target.value) }}
                value={name}
              />
              <Input 
                label="Foto"
                name="avatar"
                onChange={(e) => { setAvatar(e.target.value) }}
                value={avatar}
              />
              <Input 
                label="CPF"
                name="cpf"
                onChange={(e) => { setCPF(e.target.value) }}
                value={cpf}
              />
              <Input 
                label="Salário"
                name="salary"
                onChange={(e) => { setSalary(e.target.value) }}
                value={salary}
              />
              <Input 
                label="Desconto da previdência"
                name="discount"
                onChange={(e) => { setDiscount(e.target.value) }}
                value={discount}
              />
              <Input 
                label="Número de dependentes"
                name="dependents"
                onChange={(e) => { setDependents(e.target.value) }}
                value={dependents}
              />
            </fieldset>
            <footer className="employee-footer">
              <button
                type="submit"
                className="employee-save button button--save">
                Cadastrar
              </button>
            </footer>
          </form>
        </div>
      </main>
    </div>
  )
}

export default EmployeeForm;
