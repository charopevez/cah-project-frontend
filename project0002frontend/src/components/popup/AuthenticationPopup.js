import LoginForm from 'components/forms/LoginForm'
import RegistrationForm from 'components/forms/RegistrationForm'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchToLogin, switchToRegister } from 'store/auth/authSlice'

const AuthenticationPopup = () => {
    const { isOpen, registerMode } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    onClick={() => dispatch(switchToRegister())}
                >
                    register
                </button>
                <button
                    onClick={() => dispatch(switchToLogin())}
                >
                    Login
                </button>
            </div>
            {registerMode ? <RegistrationForm /> : <LoginForm />}
        </div>
    )
}




export default AuthenticationPopup