import React from 'react';
import './Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

//inicio sesion
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/user";
const cookies = new Cookies();


class Login extends React.Component {

	state={
        form:{
            usuario: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {usuario: this.state.form.usuario, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
				cookies.set('apellidos', respuesta.apellidos, {path: "/"});
				cookies.set('nombres', respuesta.nombres, {path: "/"});
				cookies.set('cargo', respuesta.cargo, {path: "/"});
				cookies.set('ciudad', respuesta.ciudad, {path: "/"});
				cookies.set('usuario', respuesta.usuario, {path: "/"});
				cookies.set('password', respuesta.password, {path: "/"});
                alert(`Bienvenido ${respuesta.nombres} ${respuesta.apellidos}`);
                window.location.href="/dashboard";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }	
 
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
									<h1>CMO</h1>
								</span>
							<div className="wrap-input100 validate-input m-b-10" data-validate = "usuario is required">
								<input className="input100" type="text" name="usuario" placeholder="Usuario" onChange={this.handleChange}></input>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<PersonIcon/>
								</span>
							</div>
							<div className="wrap-input100 validate-input m-b-10" data-validate = "Password is required">
								<input className="input100" type="password" name="password" placeholder="Contraseña" onChange={this.handleChange}></input>
								<span className="focus-input100"></span>
								<span className="symbol-input100">
									<LockIcon/>
								</span>
							</div>

							<div className="container-login100-form-btn p-t-10">
								<button className="login100-form-btn" onClick={()=> this.iniciarSesion()}>
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
