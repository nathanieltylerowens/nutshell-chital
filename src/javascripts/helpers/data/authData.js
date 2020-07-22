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
      $('.delete-vendor').removeClass('hide');
      $('.edit-vendor').removeClass('hide');
      $('#add-vendor').removeClass('hide');
      $('#new-vendor-form').removeClass('hide');
      $('#edit-vendor-form').removeClass('hide');
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
      $('.delete-vendor').addClass('hide');
      $('.edit-vendor').addClass('hide');
      $('#add-vendor').addClass('hide');
      $('#new-vendor-form').addClass('hide');
      $('#edit-vendor-form').addClass('hide');
      utils.printToDom('#new-vendor-form', '');
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
