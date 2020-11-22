import React from 'react';
import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Footer from '../footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial)
import Header from '../header/Header';



class Dashboard extends React.Component {
 
 render() {
 
 return(
 
 <>
 
	 <Menu /> 
         <Header/>
                <div className="container">                      
             
                        <hr className="featurette-divider" />
                </div>
	 <Footer />
	 
 </>
 
 )
 
 }
 
}
 
export default Dashboard;