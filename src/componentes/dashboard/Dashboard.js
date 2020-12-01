import React from 'react';
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
import Header from '../header/Header';

//material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Dashboard extends React.Component {
 
 render() {
 
 return(
 
 <>
 
	 <Menu /> 
         <Header/>
                <Container maxWidth="sm">
                <hr className="featurette-divider" />
                <Typography component="div" style={{ backgroundColor: '#fff', height: '85vh' }} />
                </Container>
	 <Footer />
	 
 </>
 
 )
 
 }
 
}
 
export default Dashboard;