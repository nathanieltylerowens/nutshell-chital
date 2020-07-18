import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import navbar from './components/navbar/navbar';

import 'bootstrap';
import '../stylings/main.scss';

import addForm from './components/lessons/addLesson/addLessonForm';
import lessons from './components/lessons/lesson';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
  navbar.filterClicks();
  addForm.buildLessonForm();
  lessons.lessonEventListeners();
};

init();
