import React, { useEffect, useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Menu from '../menu/Menu';  
import Header from '../header/Header';
import md5 from 'md5';


//material ui
import MaterialTable from 'material-table';
import {makeStyles} from '@material-ui/core/styles';

import {Modal, TextField, Button} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';

import EditSharpIcon from '@material-ui/icons/EditSharp';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import CancelIcon from '@material-ui/icons/Cancel';



const columnas = [
	{
		title: 'ID',
		field: 'id'

	},
	{
		title: 'NOMBRES',
		field: 'nombres'

	},
	{
		title: 'APELLIDOS',
		field: 'apellidos'

  },
  {
		title: 'CARGO',
		field: 'cargo'

	},
	{
		title: 'USUARIO',
		field: 'usuario'

	},
	{
		title: 'CREADO',
		field: 'fecha_creacion'
	},
];

const baseUrl = "http://localhost:3001/user"

const useStyles = makeStyles((theme) => ({
	modal: {
	  position: 'absolute',
	  width: 400,
	  backgroundColor: theme.palette.background.paper,
	  border: '2px solid #000',
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
	  width: '100%'
  },
  Button: {
      margin: theme.spacing(1),
      cursor: 'pointer',
  }
  }));



function Usuarios() {

  const notifysuccessEditar = () => {
    toast.success('Se Han Guardado Las Modificaciones')
  } 
  
  const notifysuccessInsertar = () => {
    toast.success('Se Ha Ingresado Un Nuevo Usuario')
  } 
  const styles= useStyles();
  const [data, setData] = useState ([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado]=useState({
    nombres: "",
    apellidos: "", 
    cargo:"",
    usuario : "", 
    password:"",
    fecha_creacion: "", 
  })  

  const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccionado(prevState=>({
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
    await axios.post(baseUrl, usuarioSeleccionado,)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+"/"+usuarioSeleccionado.id, usuarioSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(usuario=>{
        if(usuario.id===usuarioSeleccionado.id){
          usuario.nombres=usuarioSeleccionado.nombres;
          usuario.apellidos=usuarioSeleccionado.apellidos;
          usuario.cargo=usuarioSeleccionado.cargo;
          usuario.usuario=usuarioSeleccionado.usuario;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarUsuario=(usuario)=>{
    setUsuarioSeleccionado(usuario);
    abrirCerrarModalEditar()
  }
  
  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  useEffect (()=>{
		peticionGet();
  }, [])
  
  const bodyInsertar=(
    <div className={styles.modal}>
      <div align="right" >
      <CancelIcon className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalInsertar()}/>
      </div>
      <h3 className="text-center col-md-12" >Nuevo Usuario</h3>
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Nombres" name="nombres" onChange={handleChange} variant="outlined" color="primary" required/>
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Apellidos" name="apellidos" onChange={handleChange} variant="outlined" color="primary" required/>
      <br />
      <br />
      <NativeSelect className={styles.NativeSelect} name="cargo"  displayEmpty color="primary" onChange={handleChange} required>
										<option value="" disabled>Seleccione Cargo</option>
										<option value="ADMIN">ADMIN</option>
                    <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
										<option value="JEFE">JEFE</option>
			</NativeSelect>        
      <br />
      <br />
	<TextField className={styles.inputMaterial} label="Usuario" name="usuario" onChange={handleChange} variant="outlined" color="primary" required/>
		<br /><br />
    <TextField type="password" className={styles.inputMaterial} label="Password" name="password" onChange={handleChange} variant="outlined" color="primary" required/>
		<br />
    <br />
		<div align="center"  onClick={notifysuccessInsertar}>
			<Button className={styles.Button}  variant="contained" color="primary" onClick={()=>peticionPost()}><PresentToAllIcon/></Button>
		<ToastContainer />
    </div>
		</div>
  )
  
  const bodyEditar=(
    <div className={styles.modal}>
      <div align="right">
      <CancelIcon className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalEditar()}/>
      </div>
      <h3 className="text-center col-md-12">Modificar Usuario</h3>
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Nombre Documento" name="nombres"  onChange={handleChange} variant="outlined" color="primary" value={usuarioSeleccionado&&usuarioSeleccionado.nombres} required/>
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Apellidos" name="apellidos" onChange={handleChange} value={usuarioSeleccionado&&usuarioSeleccionado.apellidos} variant="outlined" color="primary" required/>
      <br />
      <br />
      <NativeSelect className={styles.NativeSelect} name="cargo"  displayEmpty color="primary" onChange={handleChange} value={usuarioSeleccionado&&usuarioSeleccionado.cargo} required>
                    <option value="" disabled>Seleccione Cargo</option>
										<option value="ADMIN">ADMIN</option>
                    <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
										<option value="JEFE">JEFE</option>
			</NativeSelect>        
	<br />
  <br />
	<TextField className={styles.inputMaterial} label="Usuario" name="usuario" onChange={handleChange} variant="outlined" color="primary" value={usuarioSeleccionado&&usuarioSeleccionado.usuario} required/>
		<br /><br />
		<div align="center" onClick={notifysuccessEditar}>
    <ToastContainer />
			<Button className={styles.Button} variant="contained" color="primary" onClick={()=>peticionPut()}><PresentToAllIcon/></Button>
		</div>
		</div>
	)

    return (
      <>
       <Menu /> 
       		<Header/>
           <div className="container">    
                 <br/>
				 <Button variant="contained" color="secondary" onClick={()=>abrirCerrarModalInsertar()}><GroupAddIcon/></Button>
				 <br/><br/>
         	    <MaterialTable 
         	    	columns = {columnas}
                 data= {data}
         	    	title = "Usuarios Ingresados"
                    localization={{
                        header: {
                            actions: 'ACCION'
                        },
                    }} 
                    options={{
                        actionsColumnIndex: -1,
                        }}    
         	    	actions ={[
                   {
                    icon: () => <EditSharpIcon />, 
                    tooltip: 'Editar',
                    onClick: (event, rowData)=>seleccionarUsuario(rowData, "Editar")
                  },
         	    		]}
         	    />                  
                     
                </div> 

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
      </>
    );
}
export default Usuarios;