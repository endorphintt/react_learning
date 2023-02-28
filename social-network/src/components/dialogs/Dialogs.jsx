import React from "react";
import './Dialogs.scss'

const Dialogs = (props) => { 
    let newMessageBody = React.createRef();

    const updateMessageBody = () => {
        let text = newMessageBody.current.value;
        props.updateMessageBody(text)
    }

    const sendMessage = () => {
        props.sendMessage();
        newMessageBody.current.value = ''
    }

    return(
        <div className="dialogs">
            <div className="dialog__items">
                {props.dialogsElement}
            </div>
            <div className="messages">
                <div className="messages_element">{props.messagesElement}</div>
                <div className="add-message">
                    <textarea ref={newMessageBody} value={props.newMessageText} onChange={updateMessageBody} className="add-message__textarea"></textarea>
                    <button onClick={sendMessage} className="add-message__button">send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;