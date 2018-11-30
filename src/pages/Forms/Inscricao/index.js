import React from 'react';
import ComoConheceu from './ComoConheceu';
import DadosPessoais from './DadosPessoais';
import Endereco from './Endereco';
import CriarSenha from './CriarSenha';


const InscricaoForms = () => (
    <div>
        <div className="row">
            <div className="col-md-6">
                <DadosPessoais onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
            </div>
            <div className="col-md-6">
                <ComoConheceu onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
            </div>
            <div className="col-md-6">
                <Endereco onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
            </div>
            <div className="col-md-6">
                <CriarSenha onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
            </div>
        </div>
    </div>
);

export default InscricaoForms;
