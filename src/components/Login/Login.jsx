import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from './validators';
import { Input } from './Input';
import s from './input.module.css';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} placeholder={"UserName"} name={"UserName"}
                validate={[required]} />
        </div>
        <div>
            <Field component={Input} type={'password'} placeholder={"Password"} name={"password"}
                validate={[required]} />
        </div>

        <button>Login</button>
    </form>


}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)





export default LoginReduxForm;