import React, { Component } from 'react';
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
import Header from '../header/Header';

//material ui
import Container from '@material-ui/core/Container';

class View extends React.Component {
 
 render() {
 
 return(
 
 <>
 
	 <Menu /> 
         <Header/>
                <Container maxWidth="md" fixed>
                <hr className="featurette-divider" />
                <div>
                    <embed src='2.pdf'  type="application/pdf" accept= '.jpg,.pptx,.odp,.odt,.ods,.odg,image/png,image/jpeg,.pdf,.xlsx,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' width="100%" height="600px" />
                </div>
                </Container>
	 <Footer />
	 
 </>
 
 )
 
 }
 
}
 
export default View;