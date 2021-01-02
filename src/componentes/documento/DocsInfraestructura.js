import React, { useEffect, useState, useRef, useContext} from 'react';
import {ToastContainer,toast, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';



//validaciones
import SimpleReactValidator from "simple-react-validator";
  //material ui
import MaterialTable from 'material-table';
import {makeStyles} from '@material-ui/core/styles';


import {Modal, TextField, Button} from '@material-ui/core';
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



const useStyles = makeStyles((theme) => ({
	modal: {
	  position: 'absolute',
    width: 500,
    height: 450,
    overflow:'auto',
	  backgroundColor: theme.palette.grey[500],
	  border: '1px solid #000',
	  boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	  top: '50%',
	  left: '50%',
	  transform: 'translate(-55%, -50%)'
	},
	iconos:{
    cursor: 'pointer',
  }, 
  NativeSelect:{
    width: '100%',
    backgroundColor: theme.palette.common.white,
	},
	inputMaterial:{
    width: '100%',
    backgroundColor: theme.palette.common.white,
  },
  Button: {
      margin: theme.spacing(1),
      cursor: 'pointer',
  },
  archivo: {
    position: 'absolute',
    width: 900,
    height:590,
    backgroundColor: theme.palette.grey[500],
	  border: '1px solid #000',
	  boxShadow: theme.shadows[3],
	  padding: theme.spacing(2, 4, 3),
	  top: '52%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)'
  },
  descripcion: {
    position: 'absolute',
    width: 400,
    height:180,
    backgroundColor: theme.palette.grey[500],
	  border: '1px solid #000',
	  boxShadow: theme.shadows[3],
	  padding: theme.spacing(2, 4, 3),
	  top: '52%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)'
  }
  }));

const baseUrl = "http://localhost:3001/documento"

const Folder = "DOCUMENTOS DE INFRAESTRUCTURA INGRESADOS";



function DocsInfraestructura() {

	const simpleValidator = useRef(new SimpleReactValidator());
	const [, autoForceUpdate] = useState();
    const form = React.createRef();
 
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
	  categoria:"",
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
  
    const peticionGet =async()=>{
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

  
const handleUpdate=e=>{
	e.prevenDefault();		
  }

  const updateForm = () => {
	const formValid = simpleValidator.current.allValid();
	if (!formValid) {
	simpleValidator.current.showMessages(true);
	autoForceUpdate(1)
	} else {
	peticionPut();
	notifysuccessEditar();
	}
  };

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
		<form className="row" ref={form} onSubmit={handleUpdate}>
		<div className={styles.modal}>
		  <h3 className="text-center col-md-12">Modificar Documento</h3>
			  <br />
			  <br />
			  <TextField className={styles.inputMaterial} label="Nombre Documento" name="nombre_documento" onChange={handleChange} variant="outlined" color="primary" value={documentoSeleccionado&&documentoSeleccionado.nombre_documento}          
			   onBlur={() => {
								  simpleValidator.current.showMessageFor("nombre_documento")
								  autoForceUpdate(0);
								  }}/>
					 {simpleValidator.current.message("nombre_documento", documentoSeleccionado.nombre_documento, "required|nombre_documento|alpha_space|max:100|min:15")}
			  <br />
			  <br />
			  <NativeSelect className={styles.NativeSelect} name="tipo_documento"  displayEmpty color="primary" onChange={handleChange} value={documentoSeleccionado&&documentoSeleccionado.tipo_documento}          onBlur={() => {
								  simpleValidator.current.showMessageFor("tipo_documento")
								  autoForceUpdate(0);
								  }}>
							<option value="">Seleccione Tipo Documento</option>
							<option value="pdf">PDF</option>
							<option value="excel">Excel</option>
							<option value="ppt">Power Point</option>
							<option value="word">Word</option>
							<option value="jpg">Jpg</option>
			  </NativeSelect>
			  {simpleValidator.current.message("tipo_documento", documentoSeleccionado.tipo_documento, "required|tipo_documento")}      
		  <br />
		  <br />
		  <TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange} variant="outlined" color="primary" value={documentoSeleccionado&&documentoSeleccionado.descripcion}          
		  onBlur={() => {
								  simpleValidator.current.showMessageFor("descripcion")
								  autoForceUpdate(0);
								  }}/>
					 {simpleValidator.current.message("descripcion", documentoSeleccionado.descripcion, "required|descripcion|alpha_space|max:150|min:10")}
			<br /><br />
			<NativeSelect className={styles.NativeSelect} name="categoria"  displayEmpty color="primary" onChange={handleChange} value={documentoSeleccionado&&documentoSeleccionado.categoria}  
														  onBlur={() => {
															  simpleValidator.current.showMessageFor("categoria")
															  autoForceUpdate(0);
															  }}>
														  <option value="">Seleccione Categoria</option>
														  <option value="Interdependencia">Interdependencia</option>
														  <option value="Infraestructura">Infraestructura</option>
														  <option value="Dotacion">Dotacion</option>
														  <option value="Talento Humano">Talento Humano</option>
														  <option value="Procesos Prioritarios">Procesos Prioritarios</option>
														  <option value="Historias Clinicas">Historias Clinicas</option>
														  <option value="Medicamentos y Dispotivos">Medicamentos y Dispotivos</option>
														  <option value="Actas Administrativas">Actas Administrativas</option>
														  <option value="Comites">Comites</option>
														  <option value="Capacitaciones">Capacitaciones</option>
														  <option value="Evaluaciones">Evaluaciones</option>
														  <option value="Reportes">Reportes</option>
														  <option value="Auditorias Internas">Auditorias Internas</option>
														  </NativeSelect>
														  {simpleValidator.current.message("categoria", documentoSeleccionado.categoria, "required|categoria")}
			<br /><br />
			<div align="center">
			  <Button className={styles.Button} variant="contained" color="primary" onClick={updateForm}><PresentToAllIcon/></Button>
			  <Button className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalEditar()}><CancelIcon/></Button>
			</div>     
		  </div>
		  </form> 
	  )

	  const bodyDescripcion=(
		<div className={styles.descripcion}>
		  <div align="right">
			<Button className={styles.Button} variant="contained" color="secondary"  onClick={()=>abrirCerrarModalDescripcion()}><CancelIcon/></Button>
		  </div>
		  <label>DESCRIPCION</label>
		 <TextField className={styles.inputMaterial}  name="descripcion" onChange={handleChange} variant="outlined" color="secondary"  value={documentoSeleccionado.descripcion} disabled/>
		<br /><br />
		</div>
	  )
	  
	  const bodyArchivo=(
		<div className={styles.archivo}>
		  <div align="right">
			<Button className={styles.Button} variant="contained" color="secondary"  onClick={()=>abrirCerrarModalArchivo()}><CancelIcon /></Button>
		  </div>
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
				<ToastContainer draggable={false} transition={Zoom} autoClose={5000} />
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
 
export default DocsInfraestructura;
