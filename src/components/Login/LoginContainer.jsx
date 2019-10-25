import React from 'react';
import { connect } from 'react-redux';
import LoginReduxForm from './Login';
import s from './input.module.css';
import { Login } from '../../redux/reducers/auth_reducer';
import App from '../../App';


const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.Login(formData.UserName, formData.password)

    }

    if (props.isAuth) { return <App /> }
    return <div className={s.formWrapper}>
        <h1>
            Login
        </h1>
        <LoginReduxForm onSubmit={onSubmit} />
        <p>{props.error}</p>
    </div>

},

    mapStateToProps = (state) => ({
        error: state.auth.error,
        isAuth: state.auth.isAuth,
    })


export default connect(mapStateToProps, { Login })(LoginContainer);