import React from 'react';
import { Link } from 'react-router-dom';

import barsChartIcon from '../../images/icons/icon-bars-chart.svg';
import crmIcon from '../../images/icons/icon-crm.svg';

import './styles.scss';

function Landing() {
  return (
    <div className="landing">
      <div className="wrapper">
        <div className="logo landing-logo">
          <h2 className="landing-title">Sistema de gerenciamento e cálculo de imposto de renda retido na fonte (IRRF)</h2>          
        </div>
        <div className="landing-actions">
          <Link className="landing-actions--tables" to="/tabelas-calculos-irrf">
            <img src={barsChartIcon} alt="Tabelas e Cálculos do IRRF" />
            Tabelas e Cálculos do IRRF
          </Link>
          <Link className="landing-actions--register" to="/funcionarios">
            <img src={crmIcon} alt="Registrar Funcionário" />
            Registrar Funcionário
          </Link>
        </div>
        <div className="landing-footer">
          <p>Copyright © 2020. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}

export default Landing;