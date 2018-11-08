import React, { Component } from 'react';
import { Field } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const comoConheceu = ({
  handleSubmit
}) => (
  <div className="card">
    <div className="header">
      <h4>Como Conheceu o Projeto?</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <Field
          name="comoconheceu"
          type="text"
          component={renderField} />
          <select name="**SELECIONE**">
            <option value="**SELECIONE**">**SELECIONE**</option>
            <option value="id">VALOR BANCO</option>
          </select>
        </div>
        <button type="submit" className="btn btn-fill btn-info btn-label-right">Próximo</button>
      </form>
    </div>
  </div>
);

export default comoConheceu;
