import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
    const errors = {};
    if (!values.e-mail) {
      errors.e-mail = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.e-mail)) {
      errors.e-mail = 'Invalid email address'
    }
    if (!values.senha) {
      errors.senha = 'Senha é necessária';
    } else if (values.senha.length < 6) {
      errors.senha = 'Deve ter 6 caracteres ou mais';
    }
    return errors;
  };

<div className="card">
    <div className="header">
      <h4>Login</h4>
    </div>

    <button type="button" className="btn btn-wd btn-default">
        <span className="btn-label">
          <i className="fa fa-arrow-left"></i>
        </span> 
      </button>

    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">E-mail</label>
          <Field
            name="e-mail"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Senha</label>
          <Field
            name="senha"
            type="password"
            component={renderField} />
        </div>

    <button type="submit" className="btn btn-fill btn-info">Entrar</button>
        </form>
    </div>
</div>            