import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
import '../node_modules/jquery/dist/jquery.js'; // Archivo Javascript de Bootstrap 4 
import '../node_modules/jquery/dist/jquery.min.js'; // Archivo Javascript de Bootstrap 4 
// Páginas del Sitio Web
import Dashboard from './componentes/dashboard/Dashboard'; 
import Login from './componentes/login/Login'; 
import Usuarios from './componentes/usuario/Usuarios'; 
import Documentos from './componentes/documento/Documentos'
import Add from './componentes/documento/Add'


ReactDOM.render(
		<Router>
		     <div>
			      <Switch>
			 
			         {/* Páginas */}
			         <Route exact path='/' component={Login} />
			         <Route path='/dashboard' component={Dashboard} />   
			         <Route path='/usuarios' component={Usuarios} />
			         <Route path='/documentos' component={Documentos} />
			         <Route path='/add' component={Add} />         
			      </Switch>
		     </div>
	    </Router>,
		document.getElementById('root')   
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
