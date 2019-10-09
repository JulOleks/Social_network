import React from "react";
import {NavLink} from "react-router-dom"


const DialogItem = (props)=>{
	return(
		<div className="item">
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	)
} 

const Message =(props)=>{
	return(
	<div className="message">
				{props.message}
	</div>
	 )
}

const Dialogs = (props)=>{
	return(
	<div className="dialogs">
		<div className="dialogs__items">
			<DialogItem name="Den" id="1" /> 
			<DialogItem name="Karen" id="2"/> 
			<DialogItem name="Sun" id="3"/> 
			<DialogItem name="Sam" id="4"/> 

		</div>
		<div className="dialogs__messages">
			<Message message="hi" />
			<Message message="Its goo idea" />
			<Message message="Nice react" />
		</div>
	</div>

	)
}

export default Dialogs;
