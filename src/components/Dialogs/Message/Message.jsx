import React from "react";
import { NavLink } from "react-router-dom"


const Message = ({ state }) => {
	return (
		<div>
			<div className="message">
				{state.dialogsPage.messages.message}
			</div>

		</div>


	)
}



export default Message;
