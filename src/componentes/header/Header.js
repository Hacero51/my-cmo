import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
	root: {
	  '& > * + *': {
		marginTop: theme.spacing(2),
	  },
	},
  }));
  
  function handleClick(event) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
  }

function Header() {

	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
  
	const handleClick = () => {
	  setOpen((prevOpen) => !prevOpen);
	};
 
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
							<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
								<Link color="inherit" href="/dashboard" onClick={handleClick}>
								DAHSBOARD
								</Link>
								if { Link =="/usuarios"}.
								then 
								<Link color="inherit" href="/usuarios">
								USUARIOS
								if { Link =="/usuarios"}.
								then <Link color="inherit" href="/documentos" ></Link>
								</Link>
							</Breadcrumbs>
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