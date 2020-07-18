import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import buildClasses from './components/classes/buildClasses/buildClasses';
import buildStudents from './components/students/buildStudent/buildStudent';

import 'bootstrap';
import '../stylings/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
  buildClasses.buildClasses();
  buildStudents.buildStudents();
};

init();
// hey
