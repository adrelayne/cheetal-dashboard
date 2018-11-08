import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Digite seu email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido'
  } else if (false(values.email)) { //SUBSTITUIR POR VALORES DO BANCO
    errors.email = 'Email já cadastrado'
  }
  return errors;
};

const Email = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
  <div className="card">
    <div className="header">
      <h4>Digite seu email</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Email</label>
          <Field
            name="email"
            type="email"
            component={renderField} />
        </div>
        <button type="submit" className="btn btn-fill btn-info btn-label-right">Próximo</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'email',
  validate
})(Email)