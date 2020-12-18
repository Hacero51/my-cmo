import React, { useState, useRef } from "react";

//validaciones
import SimpleReactValidator from "simple-react-validator";

//axios conexion
import axios from 'axios';

//toast
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//file
import {useDropzone} from 'react-dropzone'

//material ui
import {makeStyles} from '@material-ui/core/styles';

import NativeSelect from '@material-ui/core/NativeSelect';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
		  margin: theme.spacing(1),
		  width: '25ch',
		},
	},
	cuadros: {
		width: 100,
		border: '1px solid #000',
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	  },
	iconos:{
	  cursor: 'pointer'
	}, 
	NativeSelect:{
	  width: '100%'
	},
	inputMaterial:{
		width: '100%'
	},
	TextareaAutosize:{
		width: '100%'
	}
}));

const baseUrl = "http://localhost:3001/documento"

function SimpleReactValidatorComponent() {
  const simpleValidator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();
  const form = React.createRef();

  const styles= useStyles();
	const [data, setData] = useState ([]);


	const notifysuccess = () => {
		toast.success('El Archivo Ha Sido Ingresado')
	}

	const [documentoSeleccionado, setDocumentoSeleccionado]=useState({
		nombre_documento: "",
		tipo_documento: "", 
		descripcion: "",
		archivo:"",			
	  })  


	const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
		maxFiles:1,
		maxSize:5000000, 
		accept: '.jpg,.pptx,.odp,.odt,.ods,.odg,image/png,image/jpeg,.pdf,.xlsx,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	  });
  
	const archivo = acceptedFiles.map(archivo => (
	  <li key={archivo.path}>
		{archivo.path} - {archivo.size} bytes
	  </li>
	));

	const handleChange=e=>{
		const {name, value}=e.target;
		setDocumentoSeleccionado(prevState=>({
		  ...prevState,
		  [name]: value
		}));
	  }

	  const peticionPost=async()=>{
		await axios.post(baseUrl, documentoSeleccionado)
		.then(response=>{
		  setData(data.concat(response.data));
		  window.location.href="/documents";
		}).catch(error=>{
		  console.log(error);
		})
	  }  


      const handleSubmit=e=>{
		  e.prevenDefault();		
		  e.target.reset();
    }
    
  const submitForm = () => {
    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      simpleValidator.current.showMessages(true);
      forceUpdate(1)
    } else {
      peticionPost();
    }
  };

  return (
    <div className="container">
    <br />
    <div>
    <div className="text-center col-md-12"><h3>INGRESO DE DOCUMENTO</h3></div>
    <br/>
    <br/>
      <form className="row" ref={form} onSubmit={handleSubmit}>
        <div className="form-group col-md-6"> 
                  <TextField className={styles.inputMaterial} label="Nombre del Documento" name="nombre_documento" onChange={handleChange} variant="outlined" color="primary"   
                      onBlur={() => {
                    simpleValidator.current.showMessageFor("nombre_documento")
                    forceUpdate(1);
                     }}/>
                      {simpleValidator.current.message("nombre_documento", documentoSeleccionado.nombre_documento, "required|nombre_documento")}
							      </div>
							        <br />
									<div className="form-group col-md-6"> 
								   <TextField className={styles.TextareaAutosize} label="Descripcion" name="descripcion" variant="outlined" multiline rows={2} onChange={handleChange} color="primary" 
								   onBlur={() => {
									simpleValidator.current.showMessageFor("descripcion")
									forceUpdate(1);
						        	}}/>
									 {simpleValidator.current.message("descripcion", documentoSeleccionado.descripcion, "required|descripcion")}
							      </div> 
							      <div className="form-group col-md-6"> 
							     	<label >Tipo de Documento</label> 
										<NativeSelect className={styles.NativeSelect} name="tipo_documento"  displayEmpty color="primary" onChange={handleChange} 
										onBlur={() => {
											simpleValidator.current.showMessageFor("tipo_documento")
											forceUpdate(1);
											}}>
										<option value="" disabled>Seleccione</option>
										<option value="pdf">PDF</option>
										<option value="excel">Excel</option>
										<option value="ppt">Power Point</option>
										<option value="word">Word</option>
										<option value="imagen">Imagen</option>
										</NativeSelect>
										{simpleValidator.current.message("tipo_documento", documentoSeleccionado.tipo_documento, "required|tipo_documento")}
							      </div> 
							       <br/>
							       <br/>
									<div className="form-group col-md-6"> 
											<div {...getRootProps({className: 'dropzone'})}>
												<input {...getInputProps()}  name='archivo' onChange={handleChange} 
												onBlur={() => {
												simpleValidator.current.showMessageFor("archivo")
												forceUpdate(1);
												}}/>
												<p>Arrastre y suelte el archivo aquí, o haga clic para seleccionar el archivo</p>
												<em>(Solo *.jpg y *.png son el tipo de Imagenes aceptadas)
												(Solo *.pdf,*.pptx,.xlsx,.doc son los tipos de Documentos aceptadas)</em>
											</div>
											<aside>
												<ul>file</ul>
												<ul>{archivo}</ul>
											</aside>
											{simpleValidator.current.message("archivo", documentoSeleccionado.archivo, "required|archivo")}		
							       </div>  
								   <div className="form-group col-md-12"> 
							      </div>
								  <br/>
								  <div className="form-group col-md-12"> 
							      </div>
								  <br/>
								   <div className="form-group col-md-6">
								   <ToastContainer />
							        <Button variant="contained" color="primary" size="large" type="submit" onClick={submitForm} startIcon={<SaveIcon />}>Guardar</Button>  	
									</div>
									<br/>		
      </form>
      </div>
     </div> 
    
  );
}

export default SimpleReactValidatorComponent;