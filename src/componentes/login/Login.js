import React, { useEffect, useState, useRef} from 'react';
import './Login.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {TextField} from '@material-ui/core';

//inicio sesion
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

//validaciones
import SimpleReactValidator from "simple-react-validator";

//toast
import {ToastContainer,toast,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl="http://localhost:3001/user";							
const cookies = new Cookies();


function Login(){

	const [usuarioSeleccionado, setUsuarioSeleccionado]=useState({
		nombres: "",
		apellidos: "", 
		cargo:"",
		ciudad:"",
		usuario : "", 
		password:"",
		fecha_creacion: "", 
	  })

	  const simpleValidator = useRef(new SimpleReactValidator());
	  const [, autoForceUpdate] = useState();
	  const form = React.createRef();

	  const notifysuccessLogin = () => {
		toast.success(`Bienvenido a CMO Documentos`)
	  } 

	  const notifyfaileLogin = () => {
		toast.error(`Usuario o Contraseña invalidas o los campos estan vacios`)
	  } 

	  const handleChange=e=>{
		const {name, value}=e.target;
		setUsuarioSeleccionado(prevState=>({
		  ...prevState,
		  [name]: value
		}));
	  } 
	  
    const iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {usuario: usuarioSeleccionado.usuario, password: md5(usuarioSeleccionado.password)}})
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
				//alert(`Bienvenido ${respuesta.nombres} ${respuesta.apellidos}`);
				notifysuccessLogin();
                window.location.href="/dashboard";
            }
        })
        .catch(error=>{
            console.log(error);
        })

	}

  const handleSubmit=e=>{
	e.prevenDefault();
	e.target.reset();		
  }

  const submitForm = () => {
	const formValid = simpleValidator.current.allValid();
	if (!formValid) {
	   simpleValidator.current.showMessages(true);
	   notifyfaileLogin();
	   autoForceUpdate(1)
	} else {
		iniciarSesion();
	}
   };       
   




	 
   useEffect(() => {
		if(cookies.get('usuario')){
		window.location.href="/dashboard";
	}	
	});

 return(

		<div className="limiter">
				<div className="container-login100" style={{ backgroundImage: `url(img-01.jpg)`}}>
					<div className="wrap-login100 p-t-190 p-b-30">
						<form className="login100-form validate-form">
						    <div className="login100-form-title p-t-20 p-b-45">
									<h1>CALIDAD</h1>
							</div>
							<div className="login100-form-avatar">
								<img src={'cmo.svg' } alt="AVATAR"></img>	
							</div>
							<br />
							
							<form className="row" ref={form} onSubmit={handleSubmit}>
								<div className="wrap-input100 validate-input m-b-10">
									<input className="input100" type="text" name="usuario" label="Usuario" onChange={handleChange} 
										onBlur={() => {
										simpleValidator.current.showMessageFor("usuario")
										autoForceUpdate(0);
										}}/>
									<span className="symbol-input100">
										<PersonIcon/>
									</span>
									{simpleValidator.current.message("usuario", usuarioSeleccionado.usuario, "required|usuario")}
									{simpleValidator.current.message("usuario", usuarioSeleccionado.usuario, "min:5|usuario")}
									{simpleValidator.current.message("usuario", usuarioSeleccionado.usuario, "max:15|usuario")}
								</div>
								<div className="wrap-input100 validate-input m-b-10">
									<input className="input100" type="password" name="password" label="Contraseña" onChange={handleChange}   
									      onBlur={() => {
											simpleValidator.current.showMessageFor("password")
											autoForceUpdate(0);
											}}/>
									<span className="symbol-input100">
										<LockIcon/>
									</span>
									{simpleValidator.current.message("password", usuarioSeleccionado.password, "required|password")}
             						{simpleValidator.current.message("password", usuarioSeleccionado.password, "min:10|password")}
             						{simpleValidator.current.message("password", usuarioSeleccionado.password, "max:15|password")}
								</div>
								<div className="container-login100-form-btn p-t-10">
								<ToastContainer  draggable={false} transition={Zoom} autoClose={10000}/>
									<button className="login100-form-btn" type="submit" onClick={submitForm}>
										Ingresar
									</button>
								</div>
							</form>
						</form>
					</div>
				</div>
		</div>
 )
 
 }
 
export default Login;			
