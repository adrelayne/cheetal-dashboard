import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.rg) {
    errors.email = 'RG Inválido';
  } else if (values.rg.length > 9) {
      errors.rg = 'Digite seu RG sem pontos ou traços'
  }
  if (!values.cpf) {
    errors.cpf = 'CPF Inválido';
  } else if (values.cpf.length > 11) {
    errors.cpf = 'Digite seu CPF sem pontos ou traços';
  }
  return errors;
};

const dadosPessoais = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
  <div className="card">
    <div className="header">
      <h4>Dados Pessoais</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Nome Completo *</label>
          <Field
            name="nomecompleto"
            type="name"
            component={renderField} />
        </div>

        <div className="form-group">
            <label className="control-label">Data Nascimento *</label>
            <Field
                name="datanascimento"
                type="date"
                component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">RG *</label>
          <Field
            name="rg"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">CPF *</label>
          <Field
            name="cpf"
            type="text"
            component={renderField} />
        </div>

        <div className="form-group">
            <label className="control-label">Sexo *</label>
                <Field
                name="sexo"
                type="text"
                component={renderField} />
                <select name="sexo">
                    <option value="sexo">Sexo *</option>
                    <option value="feminino">Feminino</option>
                    <option value="masculino">Masculino</option>
                    <option value="naodeclarado">Não declarado</option>
                </select>
        </div>

        <div className="form-group">
          <label className="control-label">Nome da Mãe *</label>
          <Field
            name="mae"
            type="text"
            component={renderField} />

        <Field
          name="nao declarado"
          type="checkbox"
          component={renderField}
          label="Não declarado" />
        </div>

        <div className="form-group">
          <label className="control-label">Nome do Pai *</label>
          <Field
            name="pai"
            type="text"
            component={renderField} />

        <Field
          name="nao declarado"
          type="checkbox"
          component={renderField}
          label="Não declarado" />
        </div>

        <div className="form-group">
          <label className="control-label">Telefone *</label>
          <Field
            name="telefone"
            type="tel"
            component={renderField} />

            <label className="control-label">Celular *</label>
          <Field
            name="celular"
            type="tel"
            component={renderField} />
        </div>

        <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Próximo</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'stackedForm',
  validate
})(StackedForm)