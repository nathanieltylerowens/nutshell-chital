import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
// import buildClasses from './components/classes/buildClasses/buildClasses';

import 'bootstrap';
import '../stylings/main.scss';

import lessons from './components/lessons/lesson';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
  // buildClasses.buildClasses();
  lessons.lessonMaker();
};

init();
// hey
