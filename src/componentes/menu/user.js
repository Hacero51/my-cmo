
import React, { useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import {makeStyles} from '@material-ui/core/styles';
import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';

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


function User(){
    const classes = useStyles();
    return(
        <>
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
        </>
    )
}

export default User;