import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

<div className="card">
    <div className="header">
      <h4>Endereço</h4>
    </div>

    <button type="button" className="btn btn-wd btn-default">
        <span className="btn-label">
          <i className="fa fa-arrow-left"></i>
        </span> 
      </button>

    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Logradouro*</label>
          <Field
            name="logradouro"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Número*</label>
          <Field
            name="numero"
            type="number"
            component={renderField} />

        <Field
          name="newsletter"
          type="checkbox"
          component={renderField}
          label="S/N" />
        </div>

        <div className="form-group">
          <label className="control-label">Complemento</label>
          <Field
            name="complemento"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Cidade*</label>
          <Field
            name="complemento "
            type="text"
            component={renderField} />
            <select>
                <option value="cidade1">Cidade 1</option>
                <option value="cidade2">Cidade 2</option>
                <option value="cidade3">Cidade 3</option>
                <option value="cidade4">Cidade 4</option>
            </select>
        </div>

        <div className="form-group">
          <label className="control-label">CEP*</label>
          <Field
            name="cep"
            type="number"
            component={renderField} />
        </div>

        <button type="submit" className="btn btn-fill btn-info">Concluir</button>

        </form>
    </div>
</div>


