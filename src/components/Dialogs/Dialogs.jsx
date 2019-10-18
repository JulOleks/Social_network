import React from "react";
import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {
	let dialogselem = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />))

	let messageselem = props.state.messages.map(m => (<Message message={m.message} />))

	let newMessage = React.createRef();

	let sendMess = () => {
		let innmessage = newMessage.current.value;
		alert(innmessage)
	}

	return (
		<div className="dialogs">
			<div className="dialogs__items">
				{dialogselem}
			</div>
			<div className="dialogs__messages">
				{messageselem}
				<div className="messages__addMessage">
					<textarea ref={newMessage}></textarea>
					<button onClick={sendMess}>Send</button>
				</div>
			</div>

		</div >

	)
}

export default Dialogs;
