import React from 'react';
import {
	BrowserRouter as Router,
	Route,
  } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DescriptionIcon from '@material-ui/icons/Description';




const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));
  
  function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
  }

function Header() {

	const classes = useStyles();
	const routes = [
	  {
		path: '/dashboard',
		exact: true,
		sidebar: () => <div></div>,
	  },
	  {
		path: '/usuarios',
		sidebar: () => <div><Link color="inherit" href="/usuarios"  onClick={handleClick}  className={classes.link}>
		<GroupIcon className={classes.icon}/>USUARIOS
		</Link></div>,
	  },
	  {
		path: '/documentos',
		sidebar: () => <div><Link color="inherit" href="/documentos" onClick={handleClick}  className={classes.link} >
		<DescriptionIcon className={classes.icon}/>DOCUMENTOS
		</Link></div>,
	  },
	  {
		  path: '/add',
		  sidebar: () => <div><Link color="inherit" href="/add"  onClick={handleClick}  className={classes.link}>
		  <InsertDriveFileIcon className={classes.icon}/>ADD
		  </Link>	</div>,
	  }
	]
	
 return(
 
	 <>

	 <div>
	 
	 	<div className="page-wrapper">
	            <div className="container-fluid">
	                <div className="row page-titles">
	                    <div className="col-md-5 align-self-center">
	                        <h4 className="text-themecolor">Dashboard CMO</h4>
	                    </div>
	                    <div className="col-md-7 align-self-center text-right">
	                        <div className="d-flex justify-content-end align-items-center">
							<Router>
								<div style={{ display: 'flex' }}>
									<div style={{
									padding: '10px',
									width: '100%',
									}}>
									{routes.map((route) => (
										<Route
										key={route.path}
										path={route.path}
										exact={route.exact}
										>
											<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
												<Link color="inherit" href="/dashboard" onClick={handleClick}  className={classes.link}>
												<DashboardIcon className={classes.icon}/>DAHSBOARD
												</Link>
												<route.sidebar />						
											</Breadcrumbs>											
										</Route>
									))}
									</div>
								</div>
							</Router>

	                        </div>
	                    </div>
	                </div>
		 
					 <main className="main">
					 
					            <div className="container">
					   	   
					 
					   	        	<hr className="featurette-divider" />
	                              
					            </div>
					 </main>
	            </div>
	        </div>	 
	    </div>
	</>
 
 )
 
}
 
export default Header;