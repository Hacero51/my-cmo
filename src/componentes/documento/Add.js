import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
import Header from '../header/Header';

//css propio
import './add.css';



//mui form
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';



class Add extends React.Component {

	render() {

return(
 
	 <>
	 	 <Menu /> 
         	<Header/>
         	    <div className="container">
	         	    <br />
	         	    <div>
		         	    <Form className="row" >  		    
							      <div className="text-center col-md-12"><h3>Ingresar Documento</h3></div>   
							      <div className="form-group col-md-4"> 
							     	<label for="nombre">Nombre del Documento</label>
							        <Input placeholder="Nombre del Documento" className="form-control" name="nombre_documento"/>
							      </div>  
							        <br />
							  	 <div className="form-group col-md-4">
							     	<label for="nombre">Consecutivo</label>
							        <Input placeholder="consecutivo" className="form-control" name="consecutivo"/>
							      </div> 
							        <br />
							      <div className="form-group col-md-4"> 
							     	<label for="nombre">Tipo de Documento</label>
								     	 < Select  name = "tipo_documento" defaultValue="pdf"> 
										  <option value="pdf">PDF</option>
								          <option value="excel">Excel</option>
								          <option value="ppt">Power Point</option>
								          <option value="word">Word</option>
								          <option value="jpg">Jpg</option>
								        </Select>   
							      </div> 
							       <br/>
							       <div className="form-group col-md-4"> 
							     	<label for="nombre">Descripcion</label>
							       <Input placeholder="descripcion" className="form-control" name="descripcion"/>
							      </div> 
							       <br/>
							       <div className="form-group col-md-4"> 
							     	<label for="nombre">archivo</label>
							       <Input type="file" placeholder="archivo" name="archivo"/>
							      </div> 
							       <br/>
							        <Button variant="raised">Enviar</Button>  	

						</Form> 
				      <br/>
				    </div>  
                </div>
          <Footer />	
	</>
 
 )
 
 }
 
}
 
export default Add;

