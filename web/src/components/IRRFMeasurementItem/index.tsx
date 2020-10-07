import React from 'react';

import './styles.scss';

interface IRRFMeasurementItemProps {
  name: string;
  photo: string;
}

/*const discount = () => {
  return 200;
}*/

const IRRFMeasurementItem: React.FC<IRRFMeasurementItemProps> = (props) => {
  return (
    <article className="irrfmeasurement-item">
      <header className="irrfmeasurement-item__header">
        <div className="irrfmeasurement-item__photo">
          {props.photo && (
            <img src={props.photo} alt={props.name} />
          )}
        </div>
        <div>
          <h3>{props.name}</h3>
          <span>CPF: <b>142.326.196-82</b></span>
        </div>
      </header>
      <main className="irrfmeasurement-item__main">
        <div className="irrfmeasurement-item__data">
          <p>
            Salário
            <strong>R$ 5000,00</strong>
          </p>
          <p>
            Desconto
            <strong>R$ 122,00</strong>
          </p>
          <p>
            Dependentes
            <strong>1</strong>
          </p>
        </div>
        <div className="irrfmeasurement-item__value">
          <p>
            Desconto IRRF<br />
            <strong><span>R$ 3232,09</span></strong>
          </p>
        </div>
      </main>
    </article>
  )
}

export default IRRFMeasurementItem;
