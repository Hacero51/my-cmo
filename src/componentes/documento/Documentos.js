import React, { useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
import Header from '../header/Header';




	

class Documentos extends React.Component {


 
 render() {

const columnas = [
		{
			title: 'ID',
			field: 'id'

		},
		{
			title: 'Nombre_documento',
			field: 'nombre_documento'

		},
				{
			title: 'Tipo_documento',
			field: 'tipo_documento'

		},
	];

const data = [
  { id: 1, nombre_documento: "Informe pacientes atendidos marzo", tipo_documento: "PDF",  },
  { id: 2, nombre_documento: "procesos pacientes", tipo_documento: "ppx", },
  { id: 3, nombre_documento: "procesos internos", tipo_documento: "word",  },
  { id: 4, nombre_documento: "actas enero", tipo_documento: "pdf", },
  { id: 5, nombre_documento: "actas procesos calida", tipo_documento: "pdf", },
];
 

 return(
 
	 <>
	 	 <Menu /> 
         	<Header/>
         	    <div className="container">    
                 <br/>
         	    <MaterialTable 
         	    	columns = {columnas}
         	    	data= {data}
         	    	title = "Documentos Ingresados"
                    localization={{
                        header: {
                            actions: 'Acciones'
                        },
                    }} 
                    options={{
                        actionsColumnIndex: -1,
                        }}    
         	    	actions ={[
         	    		{
         	    			icon:'edit',
         	    			tooltip: 'EDITAR',
         	    			onClick: (event, rowData)=>alert('Editaras al :'+rowData.id)
         	    		},
         	    		{
         	    			icon:'delete',
         	    			tooltip: 'Eliminar',
         	    			onClick: (event, rowData)=>window.confirm('Esta seguro de eliminar al :'+rowData.id+'?')
         	    		}
         	    		]}
         	    />                  
                     
                </div>
          <Footer />	

	</>
 
 )
 
 }
 
}
 
export default Documentos;
