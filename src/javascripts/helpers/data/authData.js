import firebase from 'firebase/app';
import 'firebase/auth';

import buildStudent from '../../components/students/buildStudent/buildStudent';
import buildAuthStudent from '../../components/students/buildStudent/authBuildStudent';

const logoutButton = $('#google-auth-out');
const loginButton = $('#google-auth-in');
const addButton = $('#addButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logoutButton.removeClass('hidden');
      loginButton.addClass('hidden');
      addButton.removeClass('hidden');
      buildStudent.buildStudents();
    } else {
      loginButton.removeClass('hidden');
      logoutButton.addClass('hidden');
      addButton.addClass('hidden');
      buildAuthStudent.buildAuthStudents();
    }
  });
};

export default { checkLoginStatus };
// hey
