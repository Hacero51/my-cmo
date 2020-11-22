import React from 'react';




class Header extends React.Component {
 
 render() {
 
 return(
 
	 <>
	 <div>
	    <br />
	 	<div className="search">
	 		<form className="input-group">
			        <input className="form-control mr-sm-2"  type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btns btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
			 </form>
	 	</div>
	 	<div className="page-wrapper">
	            <div className="container-fluid">
	                <div className="row page-titles">
	                    <div className="col-md-5 align-self-center">
	                        <h4 className="text-themecolor">Dashboard CMO</h4>
	                    </div>
	                    <div className="col-md-7 align-self-center text-right">
	                        <div className="d-flex justify-content-end align-items-center">
	                            <ol className="breadcrumb">
	                                <li className="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li><span>></span>
	                                <li className="breadcrumb-item active"><a href="javascript:void(1)">Dashboard</a></li>
	                            </ol>
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
 
}
 
export default Header;