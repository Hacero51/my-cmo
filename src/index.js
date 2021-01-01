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
import Add from './componentes/documento/AddDocs';
import DocsOpcion from './componentes/documento/DocsOpcion';

import DocsInfraestructura from './componentes/documento/DocsInfraestructura';
import DocsInterdependencia from './componentes/documento/DocsInterdependencia';
import DocsDotacion from './componentes/documento/DocsDotacion';
import DocsTH from './componentes/documento/DocsTHumano';
import DocsPP from './componentes/documento/DocsPp';
import DocsHC from './componentes/documento/DocsHclinica';
import DocsMD from './componentes/documento/DocsMd';
import DocsAA from './componentes/documento/DocsAa';
import DocsC from './componentes/documento/DocsComite';
import DocsCAP from './componentes/documento/DocsCapacitaciones';

import DocsE from './componentes/documento/DocsE';
import DocsR from './componentes/documento/DocsRep';
import DocsA from './componentes/documento/DocsAuI';


ReactDOM.render(
		<Router>
				 <BrowserRouter>
					<Switch>				
						{/* Páginas */}
						<Route exact path='/' component={Login} />
						<Route exact path='/dashboard' component={Dashboard} />   
						<Route exact path='/usuarios' component={Usuarios} />
						<Route exact path='/documents' component={DocsOpcion} />
						<Route exact path='/add' component={Add} />
						<Route exact path='/docsinfraestructura' component={DocsInfraestructura} />
						<Route exact path='/docsinterdependencia' component={DocsInterdependencia} />
						<Route exact path='/docsdotacion' component={DocsDotacion} />
						<Route exact path='/docsth' component={DocsTH} />
						<Route exact path='/docspp' component={DocsPP} />
						<Route exact path='/docshc' component={DocsHC} />
						<Route exact path='/docsmd' component={DocsMD} />
						<Route exact path='/docsaa' component={DocsAA} />
						<Route exact path='/docsc' component={DocsC} />
						<Route exact path='/docscap' component={DocsCAP} />
						<Route exact path='/docse' component={DocsE} />
						<Route exact path='/docsr' component={DocsR} />
						<Route exact path='/docsa' component={DocsA} />
					</Switch>
				  </BrowserRouter>
	    </Router>,
		document.getElementById('root')   
);


