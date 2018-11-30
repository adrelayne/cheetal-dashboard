import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (values.e-mail !== undefined) {
    errors.e-mail = 'Favor inserir e-mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.e-mail)) {
    errors.e-mail = 'E-mail inválido'
  }

  if (!values.senha) {
    errors.senha = 'Insira uma senha';
  } else if (values.senha.length < 6) {
    errors.senha = 'Necessário 6 caracteres ou mais';
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
          <label className="col-md-3 control-label">E-mail</label>
          <div className="col-md-9">
            <Field
              name="e-mail"
              type="e-mail"
              component={renderField}
              label="e-mail"
              />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3 control-label">Senha</label>
          <div className="col-md-9">
            <Field
              name="senha"
              type="senha"
              component={renderField}
              label="senha"
              />
          </div>
        </div>
        <div className="form-group">
          <label className="col-md-3"></label>
          <div className="col-md-9">
            <Field
              name="lembrarMe"
              type="checkbox"
              component={renderField}
              label="lembrar Me"
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

