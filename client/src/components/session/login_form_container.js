import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import AuthModal from "./auth_modal";

const mapStateToProps = (state) => ({
   session: state.session,
   errors: state.errors.session,
   open: !!state.ui.modal
});

const mapDispatchToProps = (dispatch) => ({
   login: (user) => dispatch(login(user)),
   signup: (user) => dispatch(signup(user)),
   clearErrors: () => dispatch(clearErrors()),
   closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal));
