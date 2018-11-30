import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
    const errors = {};
    if (values.email !== undefined) {
        errors.email = 'Email é necessário';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Endereço de email inválido'
    }
    if (!values.password) {
        errors.password = 'Senha é necessária';
      } else if (values.password.length < 6) {
        errors.password = 'Sua senha deve conter 6 caracteres ou mais';
      }
      return errors;
};

const Login = ({
    handleSubmit,
}) => (
    <div className="card">
    	<div className="header">
    	  <h4>Login</h4>
    	</div>
    	<div className="content">
    	  <form onSubmit={handleSubmit}>
    	    <div className="form-group">
    	      <label className="control-label">Email *</label>
    	      <Field
    	        name="email"
    	        type="text"
    	        component={renderField} />
    	    </div>

    	    <div className="form-group">
    	      <label className="control-label">Senha *</label>
    	      <Field
    	        name="password"
    	        type="password"
    	        component={renderField} />
    	    </div>

    	<button type="submit" className="btn btn-fill btn-info">Entrar</button>
        </form>
    </div>
</div>
);

export default reduxForm({
    form: 'login',
    validate
})(Login);
