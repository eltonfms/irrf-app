import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import IRRFMeasurement from './pages/IRRFMeasurement';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/tabelas-calculos-irrf" component={IRRFMeasurement} />
      <Route path="/funcionarios" component={Register} />
    </BrowserRouter>
  );
}

export default Routes;
