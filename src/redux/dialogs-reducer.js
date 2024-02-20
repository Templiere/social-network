const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	dialogs: [
		{id: 1, name: 'Andrey'},
		{id: 2, name: 'Sveta'},
		{id: 3, name: 'Sasha'},
		{id: 4, name: 'Valentin'},
		{id: 5, name: 'Valera'}
	],
	messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hi'},
		{id: 3, message: 'Yo'},
		{id: 4, message: 'Yo'},
		{id: 5, message: 'Yo'}
	],
	newMessageText: 'Ваше сообщение'
};
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 5,
				message: state.newMessageText
			};
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
	({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;