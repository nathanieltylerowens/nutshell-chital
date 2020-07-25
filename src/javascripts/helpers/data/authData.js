import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../utils';

const authDiv = $('#auth');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      logoutButton.removeClass('hide');
      $('.delete-student').removeClass('hide');
      $('.edit-student').removeClass('hide');
      $('#add-student').removeClass('hide');
      $('#new-student-form').removeClass('hide');
      $('#edit-student-form').removeClass('hide');
      $('.delete-teacher').removeClass('hide');
      $('.show-teacher-form').removeClass('hide');
      $('#add-teacher-form').removeClass('hide');
      $('#new-lesson').removeClass('hide');
      $('.update-lesson').removeClass('hide');
      $('.remove-lesson').removeClass('hide');
      $('.createClassBtn').removeClass('hide');
      $('.classEditBtn').removeClass('hide');
      $('.deleteClassIcon').removeClass('hide');
      $('.fixclassbtn').removeClass('hide');
      $('#add-vis-form').removeClass('hide');
    } else {
      logoutButton.addClass('hide');
      authDiv.removeClass('hide');
      $('.delete-student').addClass('hide');
      $('.edit-student').addClass('hide');
      $('#add-student').addClass('hide');
      $('#new-student-form').addClass('hide');
      $('#edit-student-form').addClass('hide');
      utils.printToDom('#new-student-form', '');
      $('.delete-teacher').addClass('hide');
      $('.show-teacher-form').addClass('hide');
      $('#add-teacher-form').addClass('hide');
      $('#new-lesson').addClass('hide');
      $('.update-lesson').addClass('hide');
      $('.remove-lesson').addClass('hide');
      $('.classEditBtn').addClass('hide');
      $('.deleteClassIcon').addClass('hide');
      $('.fixclassbtn').addClass('hide');
      $('.createClassBtn').addClass('hide');
      $('#teacher-form').addClass('hide');
      $('.edit-teacher').addClass('hide');
      $('#add-lesson-form').addClass('hide');
    }
  });
};

const isAuthenticated = () => {
  if (firebase.auth().currentUser) {
    return true;
  }
  return false;
};

export default {
  checkLoginStatus,
  isAuthenticated,
};
