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
  },
  button: {
    color: theme.palette.background.paper
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.background.paper
  }
});

const NavBar = (props) => {
  const { classes, isLoggedIn } = props;
  const button = isLoggedIn ? (
    <>
      <Link to="/plans" className={classes.link}>
        <Button 
          color="inherit" 
          className={classes.button}
        >
          My Plans
        </Button>
      </Link>
      <Button 
        color="inherit" 
        onClick={props.logout}
        className={classes.button}
       >
        Logout
      </Button>
    </>
  ) : (
    <Button 
      color="inherit" 
      onClick={() => props.openModal('login')}
      className={classes.button}
    >
      Log In
    </Button>
  );
  return <React.Fragment>
      <LoginFormContainer />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button color="inherit">
            <Typography color="textPrimary" variant="h6" color="inherit" className={classes.grow}>
              <Link to="/" className={classes.link}>
                TravelX
              </Link>
            </Typography>
          </Button>
          <div>{button}</div>
        </Toolbar>
      </AppBar>
    </React.Fragment>;
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
