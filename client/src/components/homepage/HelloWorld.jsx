import React from 'react';
import { HelloWorldHeader } from '../../styles/heading';
// import Modal from '@material-ui/core/Modal';
import SignIn from '../session/SignIn';

const HelloWorld = (props) => (
   <>
   <HelloWorldHeader>Hello World!!!!!!!</HelloWorldHeader>
   <SignIn />
   </>
);

export default HelloWorld;
