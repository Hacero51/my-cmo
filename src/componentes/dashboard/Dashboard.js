import React from 'react';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';
import Crono from './crono';
import Slider from './slider';


function Dashboard() {

 
 return(
 
 <>
 
	 <Menu /> 
         <Header/>
         <div className="container">
           <br/>
         <div>
              <Crono/>
          </div>
          <br/>
           <div align="center">
            <Slider/>
 
              </div>
              <br/>
              <br/>

              </div>
	 
 </>
 
 )
 
 
}
 
export default Dashboard;