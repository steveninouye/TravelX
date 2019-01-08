import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session/login_form_container';

const styles = (theme) => ({
  appBar: {
    position: 'absolute'
  },
  toolBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  }
});

const NavBar = (props) => {
  const { classes, isLoggedIn } = props;
  const button = isLoggedIn ? (
    <Button color="inherit" onClick={props.logout}>
      Logout
    </Button>
  ) : (
    <Button color="inherit" onClick={() => props.openModal('login')}>
      Log In
    </Button>
  );
  return (
    <React.Fragment>
      <LoginFormContainer />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button color="inherit">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/">TravelX</Link>
            </Typography>
          </Button>
          <div>
            <Link to="/plans">
              <Button color="inherit">My Plans</Button>
            </Link>
            {button}
            {/* <Button color="inherit">Logout</Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: Boolean(state.session)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(NavBar));
