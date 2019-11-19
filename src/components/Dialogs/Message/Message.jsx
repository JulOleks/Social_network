import React from "react";
import { NavLink } from "react-router-dom"


const Message = (props) => {
	return (
		<div>
			<div className="message">
				{props.message}
			</div>

		</div>


	)
}



export default Message;
