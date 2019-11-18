import React from "react";
import { NavLink } from "react-router-dom"


const DialogItem = ({ state }) => {
	return (
		<div className="d-item">
			<NavLink to={`/dialogs/${state.dialogsPage.dialogs.id}`}><img src={require(`../../../img/Dialogs/${state.dialogsPage.dialogs.id}.jpg`)} alt="" className="d-item__img" /></NavLink>

			<div className="d-item__name">
				<NavLink to={`/dialogs/${state.dialogsPage.dialogs.id}`}>{state.dialogsPage.dialogs.name}</NavLink>
			</div>

		</div>
	)
}


export default DialogItem;
