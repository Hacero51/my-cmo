import React, { useEffect, useState, useRef} from 'react';
import Menu from '../menu/Menu';  
import Header from '../header/Header';

//toast
import {ToastContainer,toast,Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//axios conexion
import axios from 'axios';

//validaciones
import SimpleReactValidator from "simple-react-validator";

//encrypt
import md5 from 'md5';

//material ui
import MaterialTable from 'material-table';
import {makeStyles} from '@material-ui/core/styles';

import {Modal, TextField, Button} from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
		title: 'CIUDAD',
		field: 'ciudad'

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
    width: 500,
    height: 500,
    overflow:'auto',
	  backgroundColor: theme.palette.grey[500],
	  border: '1px solid #000',
	  boxShadow: theme.shadows[5],
	  padding: theme.spacing(2, 4, 3),
	  top: '50%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)'
  },
  modales: {
	  position: 'absolute',
    width: 500,
    height: 500,
    overflow:'auto',
    backgroundColor: theme.palette.grey[500],
    text: theme.palette.text.primary,
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
  Button: {
      margin: theme.spacing(1),
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
  message:{
    margin: 0,
    padding: 0,
    width: 225,
    height: 23,
  }
  }));



function Usuarios() {
   
  const simpleValidator = useRef(new SimpleReactValidator());
	const [, autoForceUpdate] = useState();
	const form = React.createRef();

  const notifysuccessEditar = () => {
    toast.success('Se Han Guardado Las Modificaciones')
  } 
  
  const notifysuccessInsertar = () => {
    toast.success('Se Ha Ingresado Un Nuevo Usuario')
  }
  
  const notifyfaileInsertar = () => {
    toast.error('Intentelo de nuevo, ingrese el Usuario')
  } 
  const styles= useStyles();
  const [data, setData] = useState ([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado]=useState({
    nombres: "",
    apellidos: "", 
    cargo:"",
    ciudad:"",
    usuario : "", 
    password: "" ,
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
    await axios.post(baseUrl,usuarioSeleccionado,)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+"/"+usuarioSeleccionado.id, usuarioSeleccionado, {password: md5(usuarioSeleccionado.password)} )
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(usuario=>{
        if(usuario.id===usuarioSeleccionado.id){
          usuario.nombres=usuarioSeleccionado.nombres;
          usuario.apellidos=usuarioSeleccionado.apellidos;
          usuario.cargo=usuarioSeleccionado.cargo;
          usuario.ciudad=usuarioSeleccionado.ciudad;
          usuario.usuario=usuarioSeleccionado.usuario;
          usuario.password=usuarioSeleccionado.password;
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
  
  const handleSubmit=e=>{
    e.prevenDefault();		
  }

  const handleUpdate=e=>{
    e.prevenDefault();		
  }

  const submitForm = () => {
	  const formValid = simpleValidator.current.allValid();
	  if (!formValid) {
    simpleValidator.current.showMessages(true);
    notifyfaileInsertar();
		autoForceUpdate(1)
	  } else {
    peticionPost();
    notifysuccessInsertar();
	  }
  };
  
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

  const bodyInsertar=(
    <form className="row" ref={form} onSubmit={handleSubmit}>
        <div className={styles.modal} >
          <h3 className="text-center col-md-12" >Nuevo Usuario</h3>
          <br />
          <br />
          <TextField className={styles.inputMaterial} label="Nombres" name="nombres" onChange={handleChange} variant="outlined" color="primary"	
          onBlur={() => {
							simpleValidator.current.showMessageFor("nombres")
							autoForceUpdate(1);
							}}/>
          {simpleValidator.current.message("nombres", usuarioSeleccionado.nombres,"required|nombres|min:10|max:200|alpha_space")}   
          <br />
          <br />
          <TextField className={styles.inputMaterial} label="Apellidos" name="apellidos" onChange={handleChange} variant="outlined" color="primary"          
           onBlur={() => {
							simpleValidator.current.showMessageFor("apellidos")
							autoForceUpdate(1);
							}}/>
            {simpleValidator.current.message("apellidos", usuarioSeleccionado.apellidos, "required|apellidos|alpha_space|max:200|min:10")}
          <br />
          <br />
          <NativeSelect className={styles.NativeSelect} name="ciudad"  displayEmpty color="primary" onChange={handleChange} 
          onBlur={() => {
							simpleValidator.current.showMessageFor("ciudad")
							autoForceUpdate(1);
							}}>   
                        <option value="">Seleccione Ciudad</option>
                        <option value="GIRARDOT">GIRARDOT</option>
                        <option value="IBAGUE">IBAGUE</option>
          </NativeSelect>
          {simpleValidator.current.message("ciudad", usuarioSeleccionado.ciudad, "required|ciudad")}         
          <br />
          <br />
          <NativeSelect className={styles.NativeSelect} name="cargo"  displayEmpty color="primary" onChange={handleChange} 
          onBlur={() => {
							simpleValidator.current.showMessageFor("cargo")
							autoForceUpdate(1);
							}}>   
                        <option value="">Seleccione Cargo</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                        <option value="JEFE">JEFE</option>
          </NativeSelect>
          {simpleValidator.current.message("cargo", usuarioSeleccionado.cargo, "required|cargo")}         
          <br />
          <br />
      <TextField className={styles.inputMaterial} label="Usuario" name="usuario" onChange={handleChange} variant="outlined" color="primary" 
      onBlur={() => {
							simpleValidator.current.showMessageFor("usuario")
							autoForceUpdate(1);
							}}/>
              {simpleValidator.current.message("usuario", usuarioSeleccionado.usuario, "required|usuario|min:5|max:15")}
        <br /><br />
        <TextField type="password" className={styles.inputMaterial} label="Password"  name="password" onChange={handleChange} variant="outlined" color="primary" 
        onBlur={() => {
							simpleValidator.current.showMessageFor("password")
							autoForceUpdate(1);
							}}/>
              {simpleValidator.current.message("password", usuarioSeleccionado.password, "required|password|min:10|max:45")}
        <br />
        <div align="center">
          <Button className={styles.Button}  variant="contained" color="primary" type="submit" onClick={submitForm}><PresentToAllIcon/></Button>
          <Button  className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalInsertar()}><CancelIcon/></Button>
        </div>
        </div>
    </form>
  )
  
  const bodyEditar=(
    <form className="row" ref={form} onSubmit={handleUpdate}>
        <div className={styles.modales}>
          <h3 className="text-center col-md-12">Modificar Usuario</h3>
          <br />
          <br />
          <TextField className={styles.inputMaterial} label="Nombres" name="nombres"  onChange={handleChange} variant="outlined" color="primary" value={usuarioSeleccionado&&usuarioSeleccionado.nombres}           
          onBlur={() => {
							simpleValidator.current.showMessageFor("nombres")
							autoForceUpdate(1);
							}}/>
              {simpleValidator.current.message("nombres", usuarioSeleccionado.nombres,"required|nombres|min:10|max:200|alpha_space")}
          <br />
          <br />
          <TextField className={styles.inputMaterial} label="Apellidos" name="apellidos" onChange={handleChange} value={usuarioSeleccionado&&usuarioSeleccionado.apellidos} variant="outlined" color="primary" 
          onBlur={() => {
							simpleValidator.current.showMessageFor("apellidos")
							autoForceUpdate(1);
							}}/>
              {simpleValidator.current.message("apellidos", usuarioSeleccionado.apellidos, "required|apellidos|alpha_space|max:200|min:10")}
          <br />
          <br />
          <NativeSelect className={styles.NativeSelect} name="ciudad"  displayEmpty color="primary" onChange={handleChange} value={usuarioSeleccionado&&usuarioSeleccionado.ciudad}
          onBlur={() => {
							simpleValidator.current.showMessageFor("ciudad")
							autoForceUpdate(1);
							}}>   
                        <option value="">Seleccione Ciudad</option>
                        <option value="GIRARDOT">GIRARDOT</option>
                        <option value="IBAGUE">IBAGUE</option>
          </NativeSelect>
          {simpleValidator.current.message("ciudad", usuarioSeleccionado.ciudad, "required|ciudad")}  
          <br />
          <br />
          <NativeSelect className={styles.NativeSelect} name="cargo"  displayEmpty color="primary" onChange={handleChange} value={usuarioSeleccionado&&usuarioSeleccionado.cargo} 
          onBlur={() => {
							simpleValidator.current.showMessageFor("cargo")
							autoForceUpdate(1);
							}}>
                        <option value="" >Seleccione Cargo</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                        <option value="JEFE">JEFE</option>
          </NativeSelect> 
          {simpleValidator.current.message("cargo", usuarioSeleccionado.cargo, "required|cargo")}       
      <br />
      <br />
      <TextField className={styles.inputMaterial} label="Usuario" name="usuario" onChange={handleChange} variant="outlined" color="primary" value={usuarioSeleccionado&&usuarioSeleccionado.usuario} 
            onBlur={() => {
							simpleValidator.current.showMessageFor("usuario")
							autoForceUpdate(1);
							}}/>
              {simpleValidator.current.message("usuario", usuarioSeleccionado.usuario, "required|usuario|min:5|max:15")}
        <br /><br />
        <TextField type="password" className={styles.inputMaterial} label="Password" name="password" onChange={handleChange} variant="outlined" color="primary" value={usuarioSeleccionado&&usuarioSeleccionado.password}
        onBlur={() => {
							simpleValidator.current.showMessageFor("password")
							autoForceUpdate(1);
							}}/>
              {simpleValidator.current.message("password", usuarioSeleccionado.password, "required|password|min:10|max:45")}
        <br />   
        <div align="center">    
          <Button className={styles.Button} variant="contained" color="primary" onClick={updateForm} ><PresentToAllIcon/></Button>
          <Button className={styles.Button} variant="contained" color="secondary" onClick={()=>abrirCerrarModalEditar()}><CancelIcon /></Button>
        </div>
        </div>
      </form>
  
	)

    return (
      <>
       <Menu /> 
       		<Header/>
           <div className="container">    
                 <br/>
				 <Button variant="contained" placeholder="Crear Usuario" color="secondary" onClick={()=>abrirCerrarModalInsertar()}><GroupAddIcon/></Button>
				 <br/><br/>
               <MaterialTable 
               scroll
         	    	columns = {columnas}
                 data= {data}
         	    	title = "USUARIOS"
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
                <ToastContainer draggable={false} transition={Zoom} autoClose={5000} />

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