import firebase from 'firebase/app';
import 'firebase/auth';

const logoutButton = $('#google-auth-out');
const loginButton = $('#google-auth-in');
const addButton = $('#addButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logoutButton.removeClass('hidden');
      loginButton.addClass('hidden');
      addButton.removeClass('hidden');
    } else {
      loginButton.removeClass('hidden');
      logoutButton.addClass('hidden');
      addButton.addClass('hidden');
    }
  });
};

export default { checkLoginStatus };
// hey
