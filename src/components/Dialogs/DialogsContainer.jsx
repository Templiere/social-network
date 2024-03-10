import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextActionCreator(text));
		},
		sendMessage: () => {
			dispatch(addMessageActionCreator());
		}
	};
};


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);