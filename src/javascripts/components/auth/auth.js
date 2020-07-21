import firebase from 'firebase/app';
import 'firebase/auth';
import authData from '../../helpers/data/authData';
import utils from '../../helpers/utils';

import 'bootstrap';

const signMeIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleProvider);
  authData.checkLoginStatus();
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i>LOG ME IN!!!</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIn);
};

const logoutEvent = () => {
  $('#navbar-logout-button').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
    authData.checkLoginStatus();
  });
};

export default {
  loginButton,
  logoutEvent,
};
