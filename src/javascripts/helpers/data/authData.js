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
      $('.delete-major').removeClass('hide');
      $('.edit-major').removeClass('hide');
      $('#edit-major-form').removeClass('hide');
      $('#major-form').removeClass('hide');
      $('#add-student').removeClass('hide');
      $('#add-major').removeClass('hide');
      $('#new-student-form').removeClass('hide');
      $('#new-major-form').removeClass('hide');
      $('#edit-student-form').removeClass('hide');
      $('#student-form').removeClass('hide');
      $('.delete-teacher').removeClass('hide');
      $('.show-teacher-form').removeClass('hide');
      $('#add-teacher-form').removeClass('hide');
      $('#new-lesson').removeClass('hide');
      $('.update-lesson').removeClass('hide');
      $('.remove-lesson').removeClass('hide');
      $('.createClassBtn').removeClass('hide');
      $('.classEditBtn').removeClass('hide');
      $('.classInfoBtn').removeClass('hide');
      $('.deleteClassIcon').removeClass('hide');
      $('.fixclassbtn').removeClass('hide');
      $('#add-vis-form').removeClass('hide');
      $('.edit-teacher').removeClass('hide');
    } else {
      logoutButton.addClass('hide');
      authDiv.removeClass('hide');
      $('.delete-student').addClass('hide');
      $('.edit-student').addClass('hide');
      $('.delete-major').addClass('hide');
      $('.edit-major').addClass('hide');
      $('#edit-major-form').addClass('hide');
      $('#major-form').addClass('hide');
      $('#add-student').addClass('hide');
      $('#add-major').addClass('hide');
      $('#new-student-form').addClass('hide');
      $('#new-major-form').addClass('hide');
      $('#edit-student-form').addClass('hide');
      $('#student-form').addClass('hide');
      utils.printToDom('#new-student-form', '');
      $('.delete-teacher').addClass('hide');
      $('.show-teacher-form').addClass('hide');
      $('#add-teacher-form').addClass('hide');
      $('#new-lesson').addClass('hide');
      $('.update-lesson').addClass('hide');
      $('.remove-lesson').addClass('hide');
      $('.classEditBtn').addClass('hide');
      $('.classInfoBtn').addClass('hide');
      $('.deleteClassIcon').addClass('hide');
      $('.fixclassbtn').addClass('hide');
      $('.createClassBtn').addClass('hide');
      $('.edit-teacher').addClass('hide');
      $('#add-lesson-form').addClass('hide');
      $('.formDiv').addClass('hide');
      $('.infoDiv').addClass('hide');
      utils.clearGridClasses();
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
