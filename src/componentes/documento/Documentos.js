import React, { useEffect, useState} from 'react';

import axios from 'axios';
import Menu from '../menu/Menu'; 
import Footer from '../footer/Footer'; 
import Header from '../header/Header';

//material ui
import MaterialTable from 'material-table';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import CancelIcon from '@material-ui/icons/Cancel';


const columnas = [
	{
		title: 'ID',
    field: 'id',
    type: 'numeric',

	},
	{
		title: 'Documento',
		field: 'nombre_documento'

	},
  {
		title: 'Tipo Documento',
		field: 'tipo_documento'

  },
  {
		title: 'Archivo',
		field: 'archivo'

	},
	{
		title: 'Fecha Ingreso',
    field: 'fecha_ingreso',
    type:  'date',

	},
	{
		title: 'Visualizacion',
    field: 'fecha_visualizacion',
    type:  'date',
	},
	{
		title: 'Accesos',
    field: 'accesos',
    type: 'numeric',

	},
	{
		title: 'Ingresado Por',
    field: 'users_id',
    type: 'numeric',

	},
];

const baseUrl = "http://localhost:3001/documento"

const useStyles = makeStyles((theme) => ({
	modal: {
	  position: 'absolute',
	  width: 400,
	  backgroundColor: theme.palette.background.paper,
	  border: '1px solid #000',
	  boxShadow: theme.shadows[5],
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
    width: '100%',
    color: theme.color,
  },
  Button: {
      margin: theme.spacing(1),
  }
  }));

 
	
	function Documentos () {

  const styles= useStyles();
  const [data, setData] = useState ([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalDescripcion, setModalDescripcion]= useState(false);
  const [documentoSeleccionado, setDocumentoSeleccionado]=useState({
    nombre_documento: "",
    tipo_documento: "", 
    descripcion:"",
    fecha_ingreso : "", 
    fecha_visualizacion: "", 
    accesos:"", 
    users_id: ""
  })  

	
  const handleChange=e=>{
    const {name, value}=e.target;
    setDocumentoSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }
	
	const peticionGet =async()=>{
		await axios.get(baseUrl)
		.then(response=>{
			setData(response.data);
		}).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, documentoSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+"/"+documentoSeleccionado.id, documentoSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(documento=>{
        if(documento.id===documentoSeleccionado.id){
          documento.nombre_documento=documentoSeleccionado.nombre_documento;
          documento.tipo_documento=documentoSeleccionado.tipo_documento;
          documento.descripcion=documentoSeleccionado.descripcion;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }


  const seleccionarDocumento=(documento, caso)=>{
    setDocumentoSeleccionado(documento);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEditar()
  }

  const seleccionarDescripcion=(documento, caso)=>{
    setDocumentoSeleccionado(documento);
    (caso==="Descripcion")?abrirCerrarModalDescripcion()

    :abrirCerrarModalDescripcion() 
  }
  
  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalDescripcion=()=>{
    setModalDescripcion(!modalDescripcion);
  }

	useEffect (()=>{
		peticionGet();
	}, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3 className="text-center col-md-12" >Nuevo Documento</h3>
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Nombre Documento" name="nombre_documento" onChange={handleChange} variant="outlined" color="primary" required/>
      <br />
      <br />
      <NativeSelect className={styles.NativeSelect} name="tipo_documento"  displayEmpty color="primary" onChange={handleChange} required>
										<option value="" disabled>Seleccione Tipo Documento</option>
										<option value="excel">Excel</option>
                    <option value="pdf">PDF</option>
										<option value="ppt">Power Point</option>
										<option value="word">Word</option>
										<option value="imagen">Imagen</option>
			</NativeSelect>        
	<br />
  <br />
  <label>Fecha Ingreso</label>
	<TextField type="date" className={styles.inputMaterial}  name="fecha_ingreso" onChange={handleChange} variant="outlined" color="primary" required/>
		<br />
    <br />
  <label>Fecha Visualizacion</label>
	<TextField type="date" className={styles.inputMaterial} name="fecha_visualizacion" onChange={handleChange} variant="outlined" color="primary" required/>
  <br />
  <br />
	<TextField className={styles.inputMaterial} label="Accesos" name="accesos" onChange={handleChange} variant="outlined" color="primary" required/>
  <br />
  <br />
	<TextField className={styles.inputMaterial} label="Ingresado Por" name="users_id" onChange={handleChange} variant="outlined" color="primary" required/>
		<br /><br />

		<div align="right">
			<Button className={styles.Button}  variant="contained" color="primary" onClick={()=>peticionPost()}><PresentToAllIcon/></Button>
			<Button className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalInsertar()}><CancelIcon/></Button>
		</div>
		</div>
  )
  
  const bodyEditar=(
    <div className={styles.modal}>
      <h3 className="text-center col-md-12">Modificar Documento</h3>
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Nombre Documento" name="nombre_documento" onChange={handleChange} variant="outlined" color="primary" value={documentoSeleccionado&&documentoSeleccionado.nombre_documento} required/>
      <br />
      <br />
      <NativeSelect className={styles.NativeSelect} name="tipo_documento"  displayEmpty color="primary" onChange={handleChange} value={documentoSeleccionado&&documentoSeleccionado.tipo_documento} required>
										<option value="" disabled>Seleccione Tipo Documento</option>
										<option value="pdf">PDF</option>
										<option value="excel">Excel</option>
										<option value="ppt">Power Point</option>
										<option value="word">Word</option>
										<option value="jpg">Jpg</option>
			</NativeSelect>        
	<br />
  <br />
	<TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange} variant="outlined" color="primary" value={documentoSeleccionado&&documentoSeleccionado.descripcion} required/>
		<br /><br />
		<div align="right">
			<Button className={styles.Button} variant="contained" color="primary" onClick={()=>peticionPut()}><PresentToAllIcon/></Button>
			<Button className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalEditar()}><CancelIcon/></Button>
		</div>
		</div>
	)

  const bodyDescripcion=(
    <div className={styles.modal}>
      <div align="right">
        <Button variant="contained" color="secondary"  onClick={()=>abrirCerrarModalDescripcion()}><CancelIcon/></Button>
      </div>
      <br />
      <label>Descripcion</label>
	   <TextField className={styles.inputMaterial}  name="descripcion" onChange={handleChange} variant="outlined" color="primary" value={documentoSeleccionado.descripcion} disabled/>
		<br /><br />
    <div>
                    <embed src={documentoSeleccionado.archivo}  type="application/pdf" accept= '.jpg,.pptx,.odp,.odt,.ods,.odg,image/png,image/jpeg,.pdf,.xlsx,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' width="100%" height="600px" />
    </div>
  
    </div>
  )

return(
 
	 <>
	 	 <Menu /> 
         	<Header/>
         	    <div className="container">    
                 <br/>
				 <Button variant="contained" color="secondary"  onClick={()=>abrirCerrarModalInsertar()}>Insertar Documento</Button>
				 <br/><br/>
         	    <MaterialTable 
         	    	columns = {columnas}
                 data= {data}
         	    	title = "DOCUMENTOS INGRESADOS"
                    localization={{
                        header: {
                            actions: 'ACCIONES'
                        },
                    }} 
                    options={{
                        actionsColumnIndex: -1,
                        }}    
         	    	actions ={[
                  {
                    icon: () => <ModeCommentIcon />, 
                    tooltip: 'Descripcion',
                    onClick: (event, rowData)=>seleccionarDescripcion(rowData,"Descripcion")
                  },
                  {
         	    			icon:() => <VisibilityIcon />,
         	    			tooltip: 'Ver Documento',
         	    			onClick: (event, rowData)=>window.confirm('Desea Ver el Documento :'+rowData.id+'?')
                   },
                   {
                    icon: () => <EditSharpIcon />, 
                    tooltip: 'Editar',
                    onClick: (event, rowData)=> seleccionarDocumento(rowData, "Editar")
                  },
         	    		]}
         	    />                  
                     
                </div>
          <Footer />	

		    <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalDescripcion}
        onClose={abrirCerrarModalDescripcion}>
          {bodyDescripcion}
        </Modal>

	</>
 
 )
  
}
 
export default Documentos;
