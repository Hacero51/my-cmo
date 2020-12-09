import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 
import '../node_modules/jquery/dist/jquery.js'; // Archivo Javascript de Bootstrap 4 
import '../node_modules/jquery/dist/jquery.min.js'; // Archivo Javascript de Bootstrap 4 
// Páginas del Sitio Web
import Dashboard from './componentes/dashboard/Dashboard'; 
import Login from './componentes/login/Login'; 
import Usuarios from './componentes/usuario/Usuarios'; 
import Documentos from './componentes/documento/Documentos';
import Add from './componentes/documento/Add';
import View from './componentes/view/View';

ReactDOM.render(
		<Router>
				 <BrowserRouter>
					<Switch>				
						{/* Páginas */}
						<Route exact path='/' component={Login} />
						<Route exact path='/dashboard' component={Dashboard} />   
						<Route exact path='/usuarios' component={Usuarios} />
						<Route exact path='/documentos' component={Documentos} />
						<Route exact path='/add' component={Add} />
						<Route exact path='/view' component={View} />
					</Switch>
				  </BrowserRouter>
	    </Router>,
		document.getElementById('root')   
);


