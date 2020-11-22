import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

class Menu extends React.Component {
 
  render() {
 
   return (
	    <div id="main-wrapper">
	        <aside className="left-sidebar">
	        	<div className="d-flex no-block nav-text-box align-items-center">
                	<span><img src="logo-icon.png" alt=""></img></span>
                	<a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"><i
                        className="ti-menu"></i></a>
                	<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"><i
                        className="ti-menu ti-close"></i></a>

            	</div>
	            <div className="scroll-sidebar">
	                <nav className="sidebar-nav">
	                    <ul id="sidebarnav">
	                        <li> <a className="waves-effect waves-dark" href="/" aria-expanded="false"><i
	                                    className="fa fa-tachometer"></i><span className="hide-menu">Dashboard</span></a></li>

	                        <li> <a className="waves-effect waves-dark" href="#" aria-expanded="false">
	                        	<span className="hide-menu">Perfiles</span><FontAwesomeIcon icon={faUsers} /></a><br></br></li>

	                        <li> <a className="waves-effect waves-dark" href="/listar" aria-expanded="false"><i
	                                    className="fa fa-table"></i><span className="hide-menu"></span>Tables</a></li>
	                    </ul>
	                </nav>

	            </div>
	        </aside>
	    </div>          
 
   )
    
  }
 
}
 
export default Menu;

