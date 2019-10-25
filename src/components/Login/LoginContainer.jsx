import React from 'react';
import { connect } from 'react-redux';
import LoginReduxForm from './Login';
import s from './input.module.css';


const LoginContainer = (props) => {

    const onSubmit = (formData) => {


    }

    return <div className={s.formWrapper}>
        <h1>
            Login
        </h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

},

    mapStateToProps = (state) => ({

    })


export default connect(mapStateToProps)(LoginContainer);