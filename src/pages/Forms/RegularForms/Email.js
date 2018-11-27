import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (values.email !== undefined) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
}

const Email = ({
  handleSubmit
}) => (
  <div className="card">
    <div className="header">
      <h4>Email *</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="col-md-3 control-label">Email</label>
          <div className="col-md-9">
            <Field
              name="email"
              type="email"
              component={renderField}
              label="Email"
              />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-3"></label>
          <div className="col-md-9">
            <button type="submit" className="btn btn-fill btn-info">Próximo</button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'email',
  validate
})(Email);

