import React from 'react';
import { HelloWorldHeader } from '../../styles/heading';
// import Modal from '@material-ui/core/Modal';
import SignIn from '../session/SignIn';
import FormDialog from '../session/auth_modal';

const HelloWorld = (props) => (
   <>
   <HelloWorldHeader>Hello World!!!!!!!</HelloWorldHeader>
   {/* <SignIn /> */}
   <FormDialog />

   </>
);

export default HelloWorld;
