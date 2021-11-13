import { React, Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginEmail: '',
            loginPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({loginEmail: event.target.value})
        console.log(event.target.value)
    }

    onPasswordChange = (event) => {
        this.setState({loginPassword: event.target.value})
        console.log(event.target.value)
    }

    onLoginClick = () => {
        console.log("Click")
        //fetch a /login con POST
        
        //cargar página de administrador (CRUD)
    }

    render() {
        return (
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <form className="measure center">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f3 fw6 ph0 mh0 tc">Login</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Correo</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Contraseña</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange}
                                    />
                                </div>
                            </fieldset>
                            <div className="tc">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                    type="submit" 
                                    value="Iniciar sesión" 
                                    onClick={this.onLoginClick}
                                />
                            </div>
                            <div className="lh-copy mt3">
                            </div>
                        </form>
                    </main>
                </article>
            </div>
        )
    }
}

export default Login
