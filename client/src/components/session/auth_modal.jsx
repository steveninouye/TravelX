import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormHelperText from '@material-ui/core/FormHelperText';
import Divider from '@material-ui/core/Divider';

export default class AuthModal extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         type: 'login',
         email: '',
         password: '',
         password2: ''
      };

      this.handleClose = this.handleClose.bind(this);
      this.handleSignupClick = this.handleSignupClick.bind(this);
      this.handleSessionAction = this.handleSessionAction.bind(this);
      this.handleDemoLogin = this.handleDemoLogin.bind(this);
   }

   handleClose() { 
      this.props.closeModal();
      this.props.clearErrors();
      if (!!this.props.saveCallback && this.props.session) {
         this.props.saveCallback();
      }
   }

   handleSignupClick() {
      this.props.clearErrors();
      this.setState({ type: 'signup' });
   }

   handleInput(field) {
      return (e) => this.setState({ [field]: e.target.value });
   }

   handleSessionAction(e) {
      e.preventDefault();
      const { email, password, password2 } = this.state;

      const closeOnSuccess = () => {
         if (Object.keys(this.props.errors).length === 0) {
            this.handleClose();
         }
      };
   }

   handleDemoLogin(e) {
      e.preventDefault();
      this.setState({ email: '', password: '' });

      const demoEmail = 'magellan@travelx.com'.split('');
      const demoPassword = 'password'.split('');

      const animateDemoLogin = () => {
         const intervalId = setInterval(() => {
            let email = this.state.email;
            let password = this.state.password;

            if (demoEmail.length > 0) {
               email += demoEmail.shift();
               this.setState({ email });
            } else if (demoPassword.length > 0) {
               password += demoPassword.shift();
               this.setState({ password });
            } else {
               clearInterval(intervalId);
               this.props
                  .login({
                     email: 'magellan@travelx.com',
                     password: 'password'
                  })
                  .then(() => this.handleClose());
            }
         }, 80);
      };

      animateDemoLogin();
   }

   renderFormHeader() {
      return (
         <DialogTitle id="form-dialog-title">
            {this.state.type === 'login' ? 'Log in' : 'Create account'}
         </DialogTitle>
      );
   }

   renderFormBody() {
      return (
         <DialogContent>
            <TextField
               autoFocus
               margin="dense"
               // id="email"
               label="Email Address"
               type="email"
               fullWidth
               required
               onChange={this.handleInput('email')}
               value={this.state.email}
               error={!!this.props.errors.email}
            />
            {this.renderErrorMessage('email')}
            <TextField
               margin="dense"
               // id="password"
               label="Password"
               type="password"
               fullWidth
               required
               onChange={this.handleInput('password')}
               value={this.state.password}
               error={!!this.props.errors.password}
            />
            {this.renderErrorMessage('password')}
            {this.renderPasswordConfirmation()}
         </DialogContent>
      );
   }

   renderFormActions() {
      const buttonStyle = {
         width: '90%',
         margin: '0 auto'
      };

      if (this.state.type === 'login') {
         return (
            <>
               <DialogActions>
                  <Button
                     onClick={this.handleSessionAction}
                     color="primary"
                     variant="outlined"
                     style={buttonStyle}
                  >
                     Log in
                  </Button>
               </DialogActions>
               <DialogContent />
               <DialogContent>
                  <Divider variant="middle" />
               </DialogContent>
               <DialogContent style={{ paddingBottom: '0px' }}>
                  <DialogContentText>Don't have an account?</DialogContentText>
               </DialogContent>
               <DialogContent />
               <DialogActions>
                  <Button
                     onClick={this.handleSignupClick}
                     color="primary"
                     variant="outlined"
                     style={buttonStyle}
                  >
                     Sign up
                  </Button>
               </DialogActions>
               <DialogContent style={{ paddingBottom: '0px' }}>
                  <DialogContentText style={{ textAlign: 'center' }}>
                     or
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button
                     onClick={this.handleDemoLogin}
                     color="primary"
                     variant="outlined"
                     style={buttonStyle}
                  >
                     Continue as guest
                  </Button>
               </DialogActions>
               <DialogContent />
            </>
         );
      } else if (this.state.type === 'signup') {
         return (
            <>
               <DialogActions>
                  <Button
                     onClick={this.handleSessionAction}
                     color="primary"
                     variant="outlined"
                     style={buttonStyle}
                  >
                     Register
                  </Button>
               </DialogActions>
               <DialogContent />
            </>
         );
      }
   }

   renderPasswordConfirmation() {
      if (this.state.type === 'signup') {
         return (
            <>
               <TextField
                  margin="dense"
                  // id="password2"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  required
                  onChange={this.handleInput('password2')}
                  value={this.state.password2}
                  error={!!this.props.errors.password2}
               />
               {this.renderErrorMessage('password2')}
            </>
         );
      }
   }

   renderErrorMessage(field) {
      const error = this.props.errors[field];
      if (error) return <FormHelperText>{error}</FormHelperText>;
   }

   render() {
      return (
         <Dialog
            open={this.props.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
            maxWidth="xs"
         >
            {this.renderFormHeader()}
            {this.renderFormBody()}
            {this.renderFormActions()}
         </Dialog>
      );
   }
}
