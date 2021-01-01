import React, { useEffect} from 'react';

//material ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DnsTwoToneIcon from '@material-ui/icons/DnsTwoTone';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {makeStyles} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';

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
	
	useEffect(() => {
		if(!cookies.get('usuario')){
			window.location.href='/';
		}
	   });
 
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
	        	<div className="d-flex no-block nav-text-box align-items-center">					
						<div class="user-panel">
							<div class="pull-left-info">
							<Grid container className={classes.root}>
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>
										<h5 className="name-user">{(cookies.get('nombres'))}<br/>{(cookies.get('apellidos'))}</h5>
										</Grid>
										<Grid item xs={30}>
										<a><RadioButtonCheckedOutlinedIcon style={{ color: green[600] }}/>Online</a>
										</Grid>
							</Grid>		
							</div>
    					</div>
						<a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"></a>
                		<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"></a>
						<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"></a>
						<AccountCircleIcon style={{ color: grey[50] }} />
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
										<li> <a className="waves-effect waves-dark" href="/documents" aria-expanded="false"><span className="hide-menu"></span><Typography><h6 className="menu">Documentos</h6></Typography></a></li>
											
										</Grid>
										<Grid item xs={30}>
										<a className="waves-effect waves-dark" href="/documents" aria-expanded="false">	
										<DnsTwoToneIcon style={{ color: grey[50] }}/>
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
										<Grid item xs={1}>
										</Grid>
										<Grid item xs={9}>		
										</Grid>
										<Grid item xs={30}>
										</Grid>
										
										
							</Grid>
							<br/><br/>
							<br/>
							<br/>
							<br/><br/>	
							<br/>
							<br/><br/>	
							<br/>
							<br/><br/>	
							<br/>
							<div>	
								<p className="footer" >&copy; {(new Date().getFullYear())} Cmo, IPS. &middot; <a href="https://clinicamatropolitanacmo.com/">Clinica Metropolitana</a> </p>		
							</div>				
	                </nav>
	            </div>
	        </aside>
		</div>
	</>	
   )
}
 
export default Menu;

