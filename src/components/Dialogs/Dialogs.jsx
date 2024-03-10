import c from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from "./Message/Message";
import React from "react";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

	let dialogsElements = props.dialogsPage.dialogs
		.map( dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id}/> );

	let messagesElements = props.dialogsPage.messages
		.map( message => <Message message={message.message} key={message.id}/> );

	let newMessageElement = React.createRef();

	let onSendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	};

	if (!props.isAuth) return <Navigate to={'/login'}/>;

	return (
		<div className={c.dialogs}>
			<div className={c.dialogs__items}>
				{dialogsElements}
			</div>
			<div className={c.messages}>
				{messagesElements}
			</div>
			<div>
				<textarea
					onChange={onNewMessageChange}
					ref={newMessageElement}
					value={props.dialogsPage.newMessageText}
				/>
				<button onClick={onSendMessageClick}>Add Message</button>
			</div>
		</div>
	)
}

export default Dialogs;