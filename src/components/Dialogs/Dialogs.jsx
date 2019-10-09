import React from "react";
import { NavLink } from "react-router-dom"


const DialogItem = (props) => {
	return (
		<div className="item">
			<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className="message">
			{props.message}
		</div>
	)
}

const Dialogs = (props) => {
	let dataDialog =
		[{ id: 1, name: "Den" }, { id: 2, name: "Karen" }, { id: 3, name: "Sun" }, { id: 4, name: "Sam" }];

	let dialogelem = dataDialog.map(d => (<DialogItem name={d.name} id={d.id} />))

	let dataMessage =
		[{ id: 1, message: "hi" }, { id: 2, message: "Its goo idea" }, { id: 3, message: "Nice react" }];
	let messageselem = dataMessage.map(m => (<Message message={m.message} />))

	return (
		<div className="dialogs">
			<div className="dialogs__items">
				{dialogelem}

			</div>
			<div className="dialogs__messages">
				{messageselem}
			</div>
		</div>

	)
}

export default Dialogs;
