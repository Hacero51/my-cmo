import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';
import View from '../view/View';




//material ui
import MaterialTable from 'material-table';
import {makeStyles} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

import {Modal, TextField, Button} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';

import VisibilityIcon from '@material-ui/icons/Visibility';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import CancelIcon from '@material-ui/icons/Cancel';

//mui form
import Form from 'muicss/lib/react/form';

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

const Folder = "DOCUMENTOS DE REPORTES INGRESADOS";

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
    cursor: 'pointer',
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
      cursor: 'pointer',
  },
  archivo: {
    position: 'absolute',
    width: 900,
    height:580,
	  backgroundColor: theme.palette.background.paper,
	  border: '1px solid #000',
	  boxShadow: theme.shadows[3],
	  padding: theme.spacing(2, 4, 3),
	  top: '52%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)'
  }
  }));

function Documentos() {

 
    const notifysuccessEditar = () => {
      toast.success('Se Han Guardado Las Modificaciones')
    }  
 
  const styles= useStyles();
  const [data, setData] = useState ([]);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalDescripcion, setModalDescripcion]= useState(false);
  const [modalArchivo, setModalArchivo]= useState(false);
  const [documentoSeleccionado, setDocumentoSeleccionado]=useState({
    nombre_documento: "",
    tipo_documento: "", 
    descripcion:"",
    archivo:"",
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
  
    const peticionGet =async(props)=>{
      await axios.get(baseUrl)
      .then(response=>{
        setData(response.data);
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
  const seleccionarArchivo=(documento, caso)=>{
    setDocumentoSeleccionado(documento);
    (caso==="Ver Documento")?abrirCerrarModalArchivo()

    :abrirCerrarModalArchivo() 
  }
  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalDescripcion=()=>{
    setModalDescripcion(!modalDescripcion);
  }

  const abrirCerrarModalArchivo=()=>{
    setModalArchivo(!modalArchivo);
  }

	useEffect (()=>{
		peticionGet();
	}, [])
  
  const bodyEditar=(
     <Form className="row" > 
    <div className={styles.modal}>
    <div align="right">
      <CancelIcon className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalEditar()} />
     </div>
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
        <div align="center" onClick={notifysuccessEditar}>
        <ToastContainer />
          <Button className={styles.Button} variant="contained" color="primary" onClick={()=>peticionPut()}><PresentToAllIcon/></Button>
        </div>       
      </div>
    </Form>  
	)

  const bodyDescripcion=(
    <div className={styles.modal}>
      <div align="right">
        <CancelIcon className={styles.Button} variant="contained" color="secondary"  onClick={()=>abrirCerrarModalDescripcion()}/>
      </div>
      <label>DESCRIPCION</label>
	   <TextField className={styles.inputMaterial}  name="descripcion" onChange={handleChange} variant="outlined" color="secondary"  value={documentoSeleccionado.descripcion} disabled/>
		<br /><br />
    </div>
  )

  const bodyArchivo=(
    <div className={styles.archivo}>
      <div align="right">
        <CancelIcon className={styles.Button} variant="contained" color="secondary"  onClick={()=>abrirCerrarModalArchivo()}/>
      </div>
      <br />
    <div>
        <embed src={documentoSeleccionado.archivo}  type="application/pdf" accept= '.jpg,.pptx,.odp,.odt,.ods,.odg,image/png,image/jpeg,.pdf,.xlsx,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document' width="850px" height="500px" label="No se puede visualizar este tipo de archivo."/>
        <br />       
    </div>
  
    </div>
  )

return(
 
	 <>
	 	 <Menu /> 
         	<Header/>
         	    <div className="container">    
				 <br/><br/>
         	    <MaterialTable 
         	    	columns = {columnas}
                 data= {data}
         	    	title = {Folder}
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
         	    			onClick: (event, rowData)=>seleccionarArchivo(rowData,"Ver Documento")
                   },
                   {
                    icon: () => <EditSharpIcon />, 
                    tooltip: 'Editar',
                    onClick: (event, rowData)=> seleccionarDocumento(rowData, "Editar")
                  },
         	    		]}
         	    />                  
                     
                </div>
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
        <Modal
        open={modalArchivo}
        onClose={abrirCerrarModalArchivo}>
          {bodyArchivo}
        </Modal>

	</>
 
 )
  
}
 



export default Documentos;
