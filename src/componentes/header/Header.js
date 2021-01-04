import React from 'react';
import Breadcrumb from './breadcrumbs';

function Header() {


 return(
 
	 <>

	 <div>
	 	<div className="page-wrapper">
	            <div className="container-fluid">
	                <div className="row page-titles">
	                    <div className="col-md-5 align-self-center">
	                        <h4 className="title-cmo">DAHSBOARD CMO</h4>
	                    </div>
	                    <div className="col-md-7 align-self-center text-right">
	                        <div className="d-flex justify-content-end align-items-center">
							<Breadcrumb/>
	                        </div>
	                    </div>
	                </div>
					 <main className="main">
					            <div className="container">
					   	        	<hr className="featurette-divider" />
					            </div>
					 </main>
	            </div>
	        </div>	 
	    </div>
	</>
 
 )
 
}
 
export default Header;