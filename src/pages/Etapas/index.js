import React from 'react';
import GerenciarEtapas from '../Etapas';

const GerEtapas = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <GerenciarEtapas onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
      </div>
    </div>
  </div>
);

export default GerEtapas;
