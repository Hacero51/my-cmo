import React, {Component} from 'react';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';
import TableDocs from '../documento/TableDocs';

function DocsTHumano() {

  let props = {
    api: "http://localhost:3001/documento",
  };
  return (
   
     <>
        <Menu /> 
             <Header/>
             <TableDocs {...props}/>
    </>

   )
    
  }
   

 
export default DocsTHumano;
