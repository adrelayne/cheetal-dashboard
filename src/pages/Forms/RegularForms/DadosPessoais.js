import React from 'react';
import {Field, reduxForm } from 'redux-form';
import renderField from '../../../components/FormInputs/renderField';
import DatePicker from '../ExtendedForms/DatePicker';

const validate = values => {
    const errors = {};
    if (!values.rg) {
        errors.rg = 'RG Inválido';
    } else if (values.rg.lenght > 9) {
        errors.rg = 'Digite seu RG sem pontos ou traços';
    }
    if (!values.cpf) {
        errors.cpf = 'CPF Inválido';
    } else if (values.cpf.lenght > 11) {
        errors.cpf = 'Digite seu CPF sem pontos ou traços';
    }
    return errors;
};

const DadosPessoais = ({
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
                        name="nome"
                        type="text"
                        component={renderField}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Data de Nascimento*</label>
                    <DatePicker/>
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
                    <label className="control-label col-md-3">Sexo *</label>
                    <div className="col-md-9 checkbox-group">
                        <Field
                            name="radioGroup"
                            type="radio"
                            label="Masculino"
                            value="masculino"
                            component={renderField} />

                        <Field
                            name="radioGroup"
                            type="radio"
                            label="Feminino"
                            value="feminino"
                            component={renderField}
                         />

                        <Field
                            name="radioGroup"
                            type="radio"
                            label="Não declarado"
                            value="sexonaodeclarado"
                            component={renderField} />
                    </div>
                </div>

                <div className="form-group">
                    <label className="control-label">Nome da Mãe *</label>
                    <Field
                        name="mae"
                        type="text"
                        component={renderField}/>

                    <Field
                        name="radioGroup"
                        type="radio"
                        label="Não declarado"
                        value="maenaodeclarado"
                        component={renderField}/>
                </div>

                <div className="form-group">
                    <label className="control-label">Nome do Pai *</label>
                    <Field
                        name="pai"
                        type="text"
                        component={renderField} />

                    <Field
                        name="radioGroup"
                        type="radio"
                        label="Não declarado"
                        value="painaodeclarado"
                        component={renderField} />
                </div>

                <div className="form-group">
                    <label className="control-label">Telefone *</label>
                    <Field
                        name="telefone"
                        type="text"
                        component={renderField} />

                    <label className="control-label">Celular *</label>
                    <Field
                        name="celular"
                        type="text"
                        component={renderField} />
                </div>

                <button type="submit" className="btn btn-info" disabled={submitting}>Próximo</button>
            </form>
        </div>
    </div>
);

export default reduxForm({
    form: 'dadosPessoais',
    validate
  })(DadosPessoais);
