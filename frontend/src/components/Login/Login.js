import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

function Login() {
    const auth = useAuth();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [redirect, setRedirect] = useState(false);

    const onEmailChange = (event) => {
        setEmail(email = event.target.value)
        console.log(email)
    }

    const onPasswordChange = (event) => {
        setPassword(password = event.target.value)
        console.log(password)
    }

    const onLoginClick = async () => {
        //login va a poner en el estado de usuario un null si no se pudo hacer login o el id del usuario si si se pudo
        await auth.login(email, password)
        //isLogged nos dice si hay usuario o no
        const allow = auth.isLogged()
        allow ? setRedirect(true) : alert("Credenciales inválidas")
    }

    if(redirect) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0 tc">Login</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Correo</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Contraseña</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="tc">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Iniciar sesión"
                                onClick={onLoginClick}
                            />
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Login
