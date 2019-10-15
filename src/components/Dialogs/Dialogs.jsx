import React from "react";
import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {

	let dialogselem = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />))

	let messageselem = props.messages.map(m => (<Message message={m.message} />))

	return (
		<div className="dialogs">
			<div className="dialogs__items">
				{dialogselem}
			</div>
			<div className="dialogs__messages">
				{messageselem}
			</div>
		</div>

	)
}

export default Dialogs;
