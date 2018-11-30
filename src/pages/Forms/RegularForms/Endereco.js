import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
    const errors = {};
    if (!values.cep) {
        errors.cep = 'CEP é necessário';
    } else if (values.cep.lenght !== 8){
        errors.cep = 'CEP inválido';
    }
    return errors;
}

const Endereco = ({
    handleSubmit
}) => (

<div className="card">
    <div className="header">
      <h4>Endereço</h4>
    </div>
    <div className="content">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="control-label">Logradouro *</label>
                <Field
                    name="logradouro"
                    type="text"
                    component={renderField} />
            </div>
            <div className="form-group">
                <label className="control-label">Número *</label>
                <Field
                    name="numero"
                    type="text"
                    component={renderField} />
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
                <select id="estado" name="estado">
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="ES">Estrangeiro</option>
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
);

export default reduxForm({
    form: 'endereco',
    validate
})(Endereco);
