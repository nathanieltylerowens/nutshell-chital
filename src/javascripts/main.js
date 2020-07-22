import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import listeners from './helpers/listeners';
// import homescreen from './components/homescreen/homescreen';

import '../stylings/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutEvent();
  listeners.createListeners();
  // homescreen.buildHomeScreen();
};

init();
