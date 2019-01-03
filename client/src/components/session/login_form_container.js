import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import AuthModal from "./auth_modal";

const mapStateToProps = (state) => ({
  // errors: state.errors.session,
  formType: "login",
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);
