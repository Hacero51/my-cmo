import React from 'react';
import Menu from '../menu/Menu'; 
import Header from '../header/Header';

import Container from '@material-ui/core/Container';
import  {Button} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	Button: {
		margin: theme.spacing(1),
		padding: 10,
		cursor: 'pointer',
	}
	}));

function DocumentsOpcion() {

		const styles= useStyles(); 

 return (
        <>
        <Menu /> 
         	<Header/>
            <Container fixed maxWidth="md" >
            <br />
            <div className="row" align="center">  		    					  
							      <div className="form-group col-md-3"> 
									 <Button variant="contained"  href='./docsinterdependencia'  className={styles.Button} color="primary" size="large"  startIcon={<FolderIcon color="secondary"/>}>Interdependencia</Button>  	
							      </div> 
                                                     <br/>
													 <br/>
								   <div className="form-group col-md-3">
							        <Button variant="contained" color="primary"  href='./docsinfraestructura' className={styles.Button}  startIcon={<FolderIcon color="secondary" />}>Infraestructura</Button>  	
									</div> 
							        <br />
									<br/>
									<div className="form-group col-md-3"> 
								   <Button variant="contained" color="primary"  href='./docsdotacion' className={styles.Button}  startIcon={<FolderIcon color="secondary"/>}>Dotacion</Button>  	
							      </div> 
                                  <br/>
								  <br/>
							      <div className="form-group col-md-3"> 
                            <Button variant="contained" color="primary" href='./docsth' className={styles.Button}  startIcon={<FolderSharedIcon color="secondary"/>}>Talento Humano</Button>  	
							      </div> 
							       <br/>
								   <br/>
									<div className="form-group col-md-3"> 
                            <Button variant="contained" color="primary"  href='./docspp' className={styles.Button} startIcon={<FolderIcon color="secondary" />}>Procesos Prioritarios</Button>  	
							       </div> 
                                                        <br/>
														<br/>
								   <div className="form-group col-md-3">
							        <Button variant="contained" color="primary" href='./docshc' className={styles.Button} startIcon={<FolderIcon color="secondary" />}>Historias Clinicas</Button>  	
									</div>			
                             <br/>
							 <br/>
								   <div className="form-group col-md-3"> 
                           <Button variant="contained" color="primary" href='./docsmd'  className={styles.Button} startIcon={<FolderIcon color="secondary" />}>Medicamentos y Dispotivos</Button>  	
							      </div>
								  <br/>
								  <br/>
								  <div className="form-group col-md-3"> 
                          <Button variant="contained" color="primary" href='./docsaa'  className={styles.Button}  startIcon={<FolderIcon color="secondary"/>}>Actas Administrativas</Button>  	
							      </div>
								  <br/>
								  <br/>
								   <div className="form-group col-md-3">
							        <Button variant="contained" color="primary" href='./docsc' className={styles.Button}   startIcon={<FolderIcon color="secondary"/>}>Comites</Button>  	
									</div>
									<br/>
									<br/>
								   <div className="form-group col-md-3">
							        <Button variant="contained" color="primary" href='./docscap' className={styles.Button}   startIcon={<FolderIcon color="secondary"/>}>Capacitaciones</Button>  	
									</div>
									<br/>
									<br/>
								   <div className="form-group col-md-3">
							        <Button variant="contained" color="primary" href='./docse' className={styles.Button} startIcon={<FolderIcon color="secondary" />}>Evaluaciones</Button>  	
									</div>
                                                      <br/>
													  <br/>
								   <div className="form-group col-md-3">
							        <Button variant="contained" color="primary" href='./docsr'  className={styles.Button} startIcon={<FolderIcon color="secondary"/>}>Reportes</Button>  	
									</div>
                            
                                                      <br/>
													  <br/>
								   <div className="form-group col-md-12">
							        <Button variant="contained" color="primary" href='./docsa' className={styles.Button} startIcon={<FolderIcon color="secondary" />}>Auditorias Internas</Button>  	
									</div>	
                          
						</div> 
           </Container>       
        </>

 )
 
 }
 
 
export default DocumentsOpcion;	
