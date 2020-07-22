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
      $('#new-vis').removeClass('hide');
      $('.update-visitor').removeClass('hide');
      $('.remove-visitor').removeClass('hide');
      $('.createRideBtn').removeClass('hide');
      $('.rideEditBtn').removeClass('hide');
      $('.deleteRideIcon').removeClass('hide');
      $('.fixridebtn').removeClass('hide');
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
      $('#new-vis').addClass('hide');
      $('.update-visitor').addClass('hide');
      $('.remove-visitor').addClass('hide');
      $('#teacher-form').addClass('hide');
      $('.edit-teacher').addClass('hide');
      $('.rideEditBtn').addClass('hide');
      $('.deleteRideIcon').addClass('hide');
      $('.fixridebtn').addClass('hide');
      $('.createRideBtn').addClass('hide');
      $('#add-vis-form').addClass('hide');
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
