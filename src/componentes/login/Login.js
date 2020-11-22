import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'


class Login extends React.Component {
 
 render() {
 
 return(

		<div className="limiter">
				<div className="container-login100" style={{ backgroundImage: `url(img-01.jpg)`}}>
					<div className="wrap-login100 p-t-190 p-b-30">
						<form className="login100-form validate-form">
							<div className="login100-form-avatar">
								<img src={'avatar-01.svg' } alt="AVATAR"></img>
							</div>

							<span className="login100-form-title p-t-20 p-b-45">
								<h2>Clinica Metropolitana De Girardot</h2>
							</span>

							<div className="wrap-input100 validate-input m-b-10" data-validate = "Username is required">
								<input className="input100" type="text" name="username" placeholder="Usuario"></input>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<FontAwesomeIcon icon={faUser} />
								</span>
							</div>

							<div className="wrap-input100 validate-input m-b-10" data-validate = "Password is required">
								<input className="input100" type="password" name="pass" placeholder="Contraseña"></input>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<FontAwesomeIcon icon={faLock} />
								</span>
							</div>

							<div className="container-login100-form-btn p-t-10">
								<button className="login100-form-btn">
									Ingresar
								</button>
							</div>

							<div className="text-center w-full p-t-25 p-b-230">
								<a href="#" className="txt1">
									Olvido Usuario/ Contraseña?
								</a>
							</div>
						</form>
					</div>
				</div>
		</div>
 )
 
 }
 
}
 
export default Login;			
