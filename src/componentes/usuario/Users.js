import React from 'react';
import ReactDOM from 'react-dom';
import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Footer from '../footer/Footer'; 
import Header from '../header/Header';

//mui form
import Form from 'muicss/lib/react/form';



import {
  Table,
  Container,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"


const data = [
  { id: 1, nombres: "Alexander", apellidos: "Hernandez Guzman", cargo: "Jefe", email:"Alexanderh@jtolm.com", fecha_creacion: "02-03-21", },
  { id: 2, nombres: "Cecilia", apellidos: "Buendia", cargo: "Administrativa", email:"cbuendia@ght.com", fecha_creacion: "01-02-21",},
  { id: 3, nombres: "Juan Andres", apellidos: "Caicedo Fuentes", cargo: "Auditor", email:"auditoriacmo@cmo.com", fecha_creacion: "01-01-21", },
  { id: 4, nombres: "Eduardo", apellidos: "Rosales Gonzalez", cargo: "Admin", email:"edrogo@gty.com", fecha_creacion: "01-02-21", },
  { id: 5, nombres: "Laura Angelica", apellidos: "Fernandez Aragon", cargo: "Jefe", email:"lauracmo@cmo.com", fecha_creacion: "02-04-21",},
];

class Listar extends React.Component {
	state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombres: "",
      apellidos: "",
      cargo: "",
      email:"",
      fecha_creacion: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombres = dato.nombres;
        arreglo[contador].apellidos = dato.apellidos;
        arreglo[contador].cargo = dato.cargo;
        arreglo[contador].email = dato.email;
        arreglo[contador].fecha_creacion = dato.fecha_creacion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
       <Menu /> 
       		<Header/>
	       <div>
      <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table border='1'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Cargo</th>
                <th>Email</th>
                <th>Creacion</th>
                <th>Acción</th>      
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombres}</td>
                  <td>{dato.apellidos}</td>
                  <td>{dato.cargo}</td>
                  <td>{dato.email}</td>
                  <td>{dato.fecha_creacion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Cargo</th>
                <th>Email</th>
                <th>Creacion</th>
                <th>Acción</th>    
              </tr>
            </tfoot>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <Form >
              <label>
               Id:
              </label>            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </Form>
            <Form>
              <label>
                Nombres: 
              </label>
              <input
                className="form-control"
                name="nombres"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombres}
              />
            </Form>
            <Form>
              <label>
                Apellidos: 
              </label>
              <input
                className="form-control"
                name="apellidos"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.apellidos}
              />
            </Form>
            <Form>
              <label>
                Cargo: 
              </label>
              <input
                className="form-control"
                name="cargo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cargo}
              />
            </Form>
            <Form>
              <label>
                Email: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <br/>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>
          <ModalBody>
            <Form>     
              <input
                className="form-control"
                placeholder="Id"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </Form>
            <br/>
            <Form>
              <input
                className="form-control"
                placeholder="Nombres"
                name="nombres"
                type="text"
                onChange={this.handleChange}
              />
            </Form>
            <br/>
            <Form>
              <input
                className="form-control"
                placeholder="Apellidos"
                name="apellidos"
                type="text"
                onChange={this.handleChange}
              />
            </Form>
            <br/>
            <Form>
              <input
                className="form-control"
                placeholder="Cargo"
                name="cargo"
                type="text"
                onChange={this.handleChange}
              />
            </Form>
            <br/>
            <Form inline={true}>
              <input
              	placeholder="Email"
              	className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
              />
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button
              color="danger"
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

	      	</div>
      	<Footer />
      </>
    );
  }
}
export default Listar;