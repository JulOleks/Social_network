import React from "react";
import { NavLink } from "react-router-dom"


const DialogItem = (props) => {
	return (
		<div className="d-item">
			<NavLink to={`/dialogs/${props.id}`}><img src={require(`../../../img/Dialogs/${props.id}.jpg`)} alt="" className="d-item__img" /></NavLink>

			<div className="d-item__name">
				<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
			</div>

		</div>
	)
}


export default DialogItem;
