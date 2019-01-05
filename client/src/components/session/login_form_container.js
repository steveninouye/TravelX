import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import AuthModal from "./auth_modal";

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthModal);
