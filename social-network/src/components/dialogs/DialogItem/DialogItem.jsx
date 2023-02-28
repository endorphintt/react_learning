import React from "react";
import '../Dialogs.scss'
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    return(
        <div className="dialog__item">
            <NavLink to={"dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;