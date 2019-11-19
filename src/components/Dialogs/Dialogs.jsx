import React from "react";
import { NavLink } from "react-router-dom"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/state"

const Dialogs = ({ dispatch, store }) => {

	let state = store.getState().dialogsPage;
	console.log(store);

	const dialogselem = state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} />))
	const messageselem = state.messages.map(m => (<Message message={m.message} />))
	const newMessageBody = state.newMessageBody;

	let sendMessClick = () => {
		store.dispatch(sendMessageCreator())
	}


	let onNewMessageChange = (e) => {
		let body = e.target.value;
		store.dispatch(updateNewMessageBodyCreator(body))

	}

	return (
		<div className="dialogs">
			<div className="dialogs__items">
				{dialogselem}
			</div>
			<div className="dialogs__messages">
				<div>{messageselem}</div>
				<div className="messages__addMessage">
					<textarea
						value={newMessageBody}
						placeholder="Enter your message"
						onChange={onNewMessageChange}
					></textarea>
					<button onClick={sendMessClick}>Send</button>
				</div>
			</div>

		</div >
	)
}

export default Dialogs;
