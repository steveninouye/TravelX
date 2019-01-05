import React from 'react';
import { HelloWorldHeader } from '../../styles/heading';
// import AuthModal from '../session/auth_modal';
import LoginFormContainer from '../session/login_form_container'

const HelloWorld = (props) => (
   <>
   <HelloWorldHeader>Hello World!!!!!!!</HelloWorldHeader>
   {/* <AuthModal /> */}
   <LoginFormContainer />

   </>
);

export default HelloWorld;
