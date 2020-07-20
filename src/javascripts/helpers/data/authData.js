import firebase from 'firebase/app';
import 'firebase/auth';

import modButtons from '../../components/modButtons/modButtons';

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
      modButtons.printModButtons();
    } else {
      loginButton.removeClass('hidden');
      logoutButton.addClass('hidden');
      addButton.addClass('hidden');
      mainAdd.addClass('hidden');
      $('body').removeClass('add-display');
      modButtons.noMods();
    }
  });
};

export default { checkLoginStatus };
// hey
