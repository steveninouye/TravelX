import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import AuthModal from "./auth_modal";

const mapStateToProps = (state) => ({
   session: state.session,
   errors: state.errors.session,
   modal: state.ui.modal,
   open: !!state.ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
   login: (user) => dispatch(login(user)),
   signup: (user) => dispatch(signup(user)),
   clearErrors: () => dispatch(clearErrors()),
   openModal: (modal) => dispatch(openModal(modal)),
   closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal));
