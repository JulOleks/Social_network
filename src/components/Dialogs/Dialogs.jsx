import React from "react";
import {NavLink} from "react-router-dom"

const Dialogs = (props)=>{
	return(
	<div className="dialogs">
		<div className="dialogs__items">
			<div className="item active"><NavLink to="/dialogs/1">Den</NavLink></div>
			<div className="item"><NavLink to="/dialogs/2">Karen</NavLink></div>
			<div className="item"><NavLink to="/dialogs/3">Sun</NavLink></div>
			<div className="item"><NavLink to="/dialogs/4">Sam</NavLink></div>
		</div>
		<div className="dialogs__messages">
			<div className="message">Hi</div> 
			<div className="message">Its goo idea</div>
			<div className="message">Nice react</div>
		</div>
	</div>

	)
}

export default Dialogs;
