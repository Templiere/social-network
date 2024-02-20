import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 12},
				{id: 2, message: 'It`s my first post', likesCount: 11}
			],
			newPostText: 'it-kamasutra.com'
		},
		dialogsPage: {
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
		},
		sidebar: {}
	},
	_callSubscriber (){
		console.log('state changed');
	},

	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
};

export default store;
window.store = store;