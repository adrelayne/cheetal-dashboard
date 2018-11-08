import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

<div className="card">
    <div className="header">
      <h4>Criar uma senha</h4>
    </div>

    <button type="button" className="btn btn-wd btn-default">
        <span className="btn-label">
          <i className="fa fa-arrow-left"></i>
        </span> 
      </button>

    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Senha*</label>
          <Field
            name="senha"
            type="text"
            component={renderField} />
        </div>

    <button type="submit" className="btn btn-fill btn-info">Próximo</button>
        </form>
    </div>
</div>            