import React, { useEffect} from 'react';
import User from './user';
import List from './list';



import './menu.css';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import grey from '@material-ui/core/colors/grey';

function Menu() {
   return (
	   <>
	    <div id="main-wrapper" position="fixed">
	        <aside className="left-sidebar">
			<div className="d-flex no-block nav-text-box align-items-center">
                	<span><img src="logo-icon.png" alt=""></img></span>
                	<a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"></a>
                	<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"></a>
						<MenuRoundedIcon style={{ color: grey[50] }}/>
            	</div>
	        	<div className="d-flex no-block nav-text-box align-items-center">					
						<div class="user-panel">
							<div class="pull-left-info">
								<User/>
							</div>
    					</div>
						<a className="waves-effect waves-dark ml-auto hidden-sm-down" href="javascript:void(0)"></a>
                		<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"></a>
						<a className="nav-toggler waves-effect waves-dark ml-auto hidden-sm-up" href="javascript:void(0)"></a>
						<AccountCircleIcon style={{ color: grey[50] }} />
            	</div>
	            <div className="scroll-sidebar">
	                <nav className="sidebar-nav">
					<br />
					<List/>
	                </nav>
	            </div>
	        </aside>
		</div>
	</>	
   )
}
 
export default Menu;

