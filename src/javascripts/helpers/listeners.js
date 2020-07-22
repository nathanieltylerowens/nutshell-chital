import authData from './data/authData';
import teacherList from '../components/teachers/teacherList';
import buildVendors from '../components/vendor/vendorList';
import displayClasses from '../components/classes/buildClasses/buildClasses';
import vendorData from './data/vendor/vendorData';
import displayVisitors from '../components/visitor/displayVisitor/visitor';
import removeVisitor from '../components/visitor/deleteVisitor';
import deleteClass from '../components/classes/deleteClass/deleteClass';
import newVendor from '../components/vendor/newVendorForm';
import editVendor from '../components/vendor/editVendorForm';
import buildStudents from '../components/student/studentList';
import studentData from './data/student/studentData';
import displayVisitors from '../components/visitor/displayVisitor/visitor';
import removeVisitor from '../components/visitor/deleteVisitor';
import newStudent from '../components/student/newStudentForm';
import editStudent from '../components/student/editStudentForm';
import utils from './utils';
import updateClass from '../components/classes/editClass/editClass';
import homescreen from '../components/homescreen/homescreen';
import newTeacher from '../components/teachers/newTeacher';
import addVisitor from '../components/visitor/addVisitor/addVisitor';
import updateVisitor from '../components/visitor/updateVisitor/updateVisitor';
import addClass from '../components/classes/addClass/addClass';

const editStudentEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }

  const studentId = e.target.closest('.card').id;
  studentData.getStudentById(studentId)
    .then((response) => {
      const studentObj = response.data;

      // Create the edit form in the DOM
      editStudent.showEditStudentForm(studentId, studentObj);

      // Check if user is logged in and if so, remove 'hide' class
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('Could not retrieve Student', err));
};

const deleteStudentEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }
  const studentId = e.target.closest('.card').id;
  studentData.deleteStudent(studentId)
    .then(() => {
      buildStudents.buildStudentList();
    })
    .catch((err) => console.error('Could not delete student', err));
};

const showNewStudentForm = () => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }
  newStudent.newStudentForm();
  authData.checkLoginStatus();
};

const submitUpdateStudentForm = (e) => {
  e.preventDefault();
  const fbStudentId = e.target.getAttribute('data-firebase-student-id');

  const inputAddress = $('#inputAddress').val();
  const inputName = $('#inputName').val();
  const inputPhone = $('#inputPhone').val();
  const inputProduct = $('#inputProduct').val();
  const studentId = e.target.getAttribute('data-studentId');

  const newStudentObj = {
    address: inputAddress,
    name: inputName,
    phoneNumber: inputPhone,
    product: inputProduct,
    studentId,
  };

  studentData.updateStudent(fbStudentId, newStudentObj)
    .then(() => {
      utils.printToDom('#student-form', '');
      buildStudents.buildStudentList();
    })
    .catch((err) => console.error('Could not update student', err));
};

const submitNewStudentForm = (e) => {
  e.preventDefault();

  // get values from form
  const inputAddress = $('#inputAddress').val();
  const inputName = $('#inputName').val();
  const inputPhone = $('#inputPhone').val();
  const inputProduct = $('#inputProduct').val();
  const studentId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const newStudentObj = {
    address: inputAddress,
    name: inputName,
    phoneNumber: inputPhone,
    product: inputProduct,
    studentId,
  };

  studentData.addStudent(newStudentObj)
    .then(() => {
      utils.printToDom('#student-form', '');
      buildStudents.buildStudentList();
    })
    .catch((err) => console.error('Add Student failed', err));
};

const createListeners = () => {
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayClasses.buildClassModule);
  $('body').on('click', '.delete-vendor', deleteVendorEvent);
  $('body').on('click', '.edit-vendor', editVendorEvent);
  $('body').on('click', '#navbar-students', buildStudents.buildStudentList);
  $('body').on('click', '.delete-student', deleteStudentEvent);
  $('body').on('click', '.edit-student', editStudentEvent);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteRideIcon', deleteClass.deleteClass);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '#add-student', showNewStudentForm);
  $('body').on('click', '#submit-new-student', submitNewStudentForm);
  $('body').on('click', '#submit-update-student', submitUpdateStudentForm);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '.delete-staff', staffList.deleteStaff);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '.navwhale', homescreen.buildHomeScreen);
  $('body').on('click', '.show-staff-form', newStaff.buildStaffForm);
  $('body').on('click', '.submit-staff-form', staffList.addStaff);
  $('body').on('click', '#add-vis-form', addVisitor.showVisForm);
  $('body').on('click', '#addVisitor', addVisitor.addVisitorEvent);
  $('body').on('click', '.update-visitor', updateVisitor.updateVisEvent);
  $('body').on('click', '#visitorUpdate', updateVisitor.updateVisitor);
  $('body').on('click', '.rideEditBtn', updateClass.updateClassForm);
  $('body').on('click', '.updateSubmit', updateClass.updateClass);
  $('body').on('click', '.edit-staff', staffList.showEditStaffForm);
  $('body').on('click', '#update-staff', staffList.editStaff);
  $('body').on('click', '.closeForm', updateClass.clearForm);
  $('body').on('click', '.createRideBtn', addClass.showClassForm);
  $('body').on('change', '#coaster-image', addClass.imageInputWatcher);
};

export default {
  createListeners,
};
