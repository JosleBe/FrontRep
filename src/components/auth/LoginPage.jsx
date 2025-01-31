import React, { useState } from 'react'
import './LoginPage.css'
import miLogo from '../../assets/img/logo-pro-help.png'
import campania from '../../assets/img/voluntarios.jpg'
const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='login-page'>
            <div className='content-left'>
                <div className="content">
                    <img id="logo"src={miLogo} alt="" />
                    <img id="img-login"src={campania} alt="" />
                </div>

            </div>
            <div className='content-right'>
                <div className='login-form'>
                    <h1>Iniciar sesión</h1>
                    <p> En ProHelp, conectamos a personas generosas con quienes más lo necesitan. ¡Juntos, podemos lograr grandes cambios!</p>
                    <form>
                        {/* Input de Correo / Teléfono */}
                        <div className='input-container'>
                            <div className="icon-box">
                                <span className="material-symbols-outlined filled">person</span>
                            </div>
                            <div className="divider"></div>
                            <input type='email' id='email' name='email' required placeholder='Correo número de telefono' />
                        </div>

                        {/* Input de Contraseña */}
                        <div className='input-container'>
                            <div className="icon-box">
                                <span className="material-symbols-outlined ">lock</span>
                            </div>
                            <div className="divider"></div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id='password'
                                name='password'
                                required
                                placeholder='Contraseña'
                            />
                            <button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
                                <span className="material-symbols-outlined">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </span>
                            </button>
                        </div>
                        <p className='forgot-password'>¿Olvidaste tu contraseña?</p>

                        <button className='btn-login' type='submit'>Ingresar</button>
                        <p className='separate'>o</p>
                        <button className="btn-login" id='register' type='button'>Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

