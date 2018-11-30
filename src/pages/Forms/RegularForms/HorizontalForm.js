import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (values.email !== undefined) {
    errors.email = 'Favor inserir e-mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'E-mail inválido'
  }

  if (!values.password) {
    errors.password = 'Insira uma senha';
  } else if (values.password.length < 6) {
    errors.password = 'Necessário 6 caracteres ou mais';
  }
  return errors;
}

const HorizontalForm = ({
  handleSubmit
}) => (
  <div className="card">
    <div className="header">
      <h4>Horizontal Form</h4>
    </div>
    <div className="content">
      <form className="form-horizontal" onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="col-md-3 control-label">Email</label>
          <div className="col-md-9">
            <Field
              name="email"
              type="email"
              component={renderField}
              label="email"
              />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label">Password</label>
          <div className="col-md-9">
            <Field
              name="password"
              type="password"
              component={renderField}
              label="password"
              />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-3"></label>
          <div className="col-md-9">
            <Field
              name="rememberMe"
              type="checkbox"
              component={renderField}
              label="rememberMe"
              />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3"></label>
          <div className="col-md-9">
            <button type="submit" className="btn btn-fill btn-info">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'horizontalForm',
  validate
})(HorizontalForm);

