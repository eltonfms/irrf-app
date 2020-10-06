import React from 'react';
import PageHeader from '../../components/PageHeader';
import IRRFMeasurementItem from '../../components/IRRFMeasurementItem';

import tempPhoto1 from '../../images/temp/photo-leticia-aurora-farias.jpg';
import tempPhoto2 from '../../images/temp/photo-edson-thiago-drumond.jpg';
import tempPhoto3 from '../../images/temp/photo-sandra-gioavanna-drumond.jpg';

import './styles.scss';

function IRRFMeasurement() {
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
          <IRRFMeasurementItem
            name="Letícia Aurora Farias"
            photo={tempPhoto1} />
          <IRRFMeasurementItem
            name="Edson Thiago Drumond"
            photo={tempPhoto2} />
          <IRRFMeasurementItem
            name="Fátima Elza Tereza Castro"
            photo="" />
          <IRRFMeasurementItem
            name="Sandra Giovanna Drumond"
            photo={tempPhoto3} />
          <IRRFMeasurementItem
            name="Valentina Clara Nunes"
            photo="" />
        </div>
      </main>
    </div>
  )
}

export default IRRFMeasurement;
