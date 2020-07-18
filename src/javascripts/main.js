import firebase from 'firebase/app';
import apiKeys from './helpers/data/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import buildClasses from './components/classes/buildClasses/buildClasses';
import buildStudents from './components/students/buildStudent/buildStudent';
import buildTeachers from './components/teachers/buildTeacher/buildTeachers';

import 'bootstrap';
import '../stylings/main.scss';

import lessons from './components/lessons/lesson';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  auth.logoutButton();
  buildClasses.buildClasses();
  buildStudents.buildStudents();
  buildTeachers.buildTeachers();
  lessons.lessonMaker();
};

init();
