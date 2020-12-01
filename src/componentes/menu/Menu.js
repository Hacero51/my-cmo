import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

//material ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DescriptionIcon from '@material-ui/icons/Description';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {makeStyles} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import './menu.css';

//login & logout
import Cookies from 'universal-cookie';
const cookies = new Cookies();

  const useStyles = makeStyles((theme) => ({
	root: {
	  '& > svg': {
		margin: theme.spacing(2),
	  },
	},
  }));



function Menu() {
	
	const classes = useStyles();

	const cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('nombres', {path: "/"});
		cookies.remove('cargo', {path: "/"});
		cookies.remove('ciudad', {path: "/"});
		cookies.remove('password', {path: "/"});
        cookies.remove('usuario', {path: "/"});
        window.location.href='/';
    }
 
 	console.log('id: '+ cookies.get('id'));
	console.log('apellidos: '+cookies.get('apellidos'));
	console.log('nombres: '+cookies.get('nombres'));
	console.log('cargo: '+cookies.get('cargo'));
	console.log('ciudad: '+cookies.get('ciudad'));
	console.log('usuario: '+cookies.get('usuario'));
	console.log('password: '+cookies.get('password'));	 	 
 
   return (
	   <>
	    <div id="main-wrapper" position="fixed">
	        <aside className="left-sidebar">
	        	<div className="d-flex no-block nav-text-box align-items-center">
                	<span><img src="logo-icon.png" alt=""></img></span>
                	<a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"></a>
                	<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"></a>
						<MenuRoundedIcon style={{ color: grey[50] }}/>
            	</div>
	            <div className="scroll-sidebar">
	                <nav className="sidebar-nav">
					<br />
					<Grid container className={classes.root}>
										
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>
										<li><a className="waves-effect waves-dark" href="/dashboard" aria-expanded="false"><span className="hide-menu"><Typography><h6 className="menu">Dashboard</h6></Typography></span></a></li>
										</Grid>
										<Grid item xs={30}>
										<a className="waves-effect waves-dark" href="/dashboard" aria-expanded="false">
										<DashboardIcon style={{ color: grey[50] }}/>
										</a>
										</Grid>
										<br />
										<br />
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>
										<li> <a className="waves-effect waves-dark" href="/usuarios" aria-expanded="false"><span className="hide-menu"><Typography><h6 className="menu">Usuarios</h6></Typography></span></a></li>
											
										</Grid>
										<Grid item xs={30}>
										<a className="waves-effect waves-dark" href="/usuarios" aria-expanded="false">
										<GroupIcon style={{ color: grey[50] }}/>
										</a>	
										</Grid>
										<br />
										<br />
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>
										<li> <a className="waves-effect waves-dark" href="/documentos" aria-expanded="false"><span className="hide-menu"></span><Typography><h6 className="menu">Documentos</h6></Typography></a></li>
											
										</Grid>
										<Grid item xs={30}>
										<a className="waves-effect waves-dark" href="/documentos" aria-expanded="false">	
										<DescriptionIcon style={{ color: grey[50] }}/>
										</a>
										</Grid>
										<br />
										<br />
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>
										<li> <a className="waves-effect waves-dark" href="/add" aria-expanded="false"><span className="hide-menu"></span><Typography><h6 className="menu">Agregar Documento</h6></Typography></a></li>				
										</Grid>
										<Grid item xs={30}>
										<a className="waves-effect waves-dark" href="/add" aria-expanded="false">
										<InsertDriveFileIcon style={{ color: grey[50] }}/>
										</a>
										</Grid>
										<br />
										<br />
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>
										<li> <a className="waves-effect waves-dark" onClick={()=>cerrarSesion()} aria-expanded="false"><span className="hide-menu"></span><Typography><h6 className="menu">Salir</h6></Typography></a></li>		
										</Grid>
										<Grid item xs={30}>
										<a className="waves-effect waves-dark" onClick={()=>cerrarSesion()} aria-expanded="false">	
										<ExitToAppRoundedIcon style={{ color: grey[50] }}/>
										</a>
										</Grid>
							</Grid>			
	                </nav>

	            </div>
	        </aside>
		</div>

	</>	
		
		          
 
   )
    
}
 
export default Menu;

