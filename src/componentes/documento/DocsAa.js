import React from 'react';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';
import TableDocs from '../documento/TableDocs';

export const UrlAaContext = React.createContext()
export const UrlaaContext = React.createContext()

function DocsAa() {

return(
 
	 <>
	 	 <Menu /> 
         	<Header/>
			 <UrlAaContext.Provider value={'http://localhost:3001/documento'}>
			   <TableDocs/>
			 </UrlAaContext.Provider>
	</>
 
 )
  
}
 

export default DocsAa;
