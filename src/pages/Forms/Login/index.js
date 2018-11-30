import React from 'react';
import LoginAdmin from './Login';

const LoginForm = () => (
    <div>
        <div className="row">
        <div className="container-fluid" width="100%">
            <LoginAdmin onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
        </div>
        </div>
    </div>
);

export default LoginForm;
