import firebase from 'firebase/app';
import 'firebase/auth';

const logoutButton = $('#google-auth-out');
const loginButton = $('#google-auth-in');
const addButton = $('#addButton');
const mainAdd = $('#main-add-form');

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
      mainAdd.addClass('hidden');
      $('body').removeClass('add-display');
    }
  });
};

export default { checkLoginStatus };
// hey
