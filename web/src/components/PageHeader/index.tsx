import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../images/icons/icon-back.svg';

import './styles.scss';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="irrfmeasurement-list__header">
      <div className="irrfmeasurement-list__top">
        <div className="wrapper">
          <header className="header">
            <div className="header__back">
              <Link to="/">
                <img src={backIcon} alt="Voltar" />
              </Link>
            </div>
            <div className="header__logo">
              <p>Sistema IRRF</p>
            </div>
            <div className="header__title">
              <h2>{props.title}</h2>
            </div>
          </header>
        </div>
      </div>
      {props.children &&
        <div className="irrfmeasurement-list__info">
          <div className="wrapper">
            {props.children}
          </div>
        </div>
      }
    </div>
  )
}

export default PageHeader;
