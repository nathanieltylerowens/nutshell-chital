import authData from './data/authData';
import staffList from '../components/staff/staffList';
import buildVendors from '../components/vendor/vendorList';
import displayRides from '../components/ride/displayRides/displayRides';
import vendorData from './data/vendor/vendorData';
import displayLessons from '../components/lessons/displayLessons/lesson';
import removeLessons from '../components/lessons/deleteLessons/deleteLessons';
import deleteRide from '../components/ride/deleteRide/deleteRide';
import newVendor from '../components/vendor/newVendorForm';
import editVendor from '../components/vendor/editVendorForm';
import teacherList from '../components/teachers/teacherList';
import displayClasses from '../components/classes/buildClasses/buildClasses';
import displayVisitors from '../components/visitor/displayVisitor/visitor';
import removeVisitor from '../components/visitor/deleteVisitor';
import deleteClass from '../components/classes/deleteClass/deleteClass';
import buildStudents from '../components/student/studentList';
import studentData from './data/student/studentData';
import newStudent from '../components/student/newStudentForm';
import editStudent from '../components/student/editStudentForm';
import utils from './utils';
import updateClass from '../components/classes/editClass/editClass';
import homescreen from '../components/homescreen/homescreen';
import newStaff from '../components/staff/newStaff';
import addLesson from '../components/lessons/addLesson/addLesson';
import updateLesson from '../components/lessons/editLesson/editLesson';
import createRide from '../components/ride/createRide/createRide';
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
<<<<<<< HEAD
  $('body').on('click', '#navbar-vendors', buildVendors.buildVendorList);
  $('body').on('click', '.rideLink', displayRides.buildRideModule);
  $('body').on('click', '.delete-vendor', deleteVendorEvent);
  $('body').on('click', '.edit-vendor', editVendorEvent);
  $('body').on('click', '.lessonLink', displayLessons.printLessons);
  $('body').on('click', '#remove-lesson', removeLessons.deleteLesson);
  $('body').on('click', '.deleteRideIcon', deleteRide.deleteRide);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '#add-vendor', showNewVendorForm);
  $('body').on('click', '#submit-new-vendor', submitNewVendorForm);
  $('body').on('click', '#submit-update-vendor', submitUpdateVendorForm);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '.delete-staff', staffList.deleteStaff);
  $('body').on('click', '#navbar-staff', staffList.buildStaffModule);
  $('body').on('click', '.fixridebtn', updateRide.fixRide);
  $('body').on('click', '.navwhale', homescreen.buildHomeScreen);
  $('body').on('click', '.show-staff-form', newStaff.buildStaffForm);
  $('body').on('click', '.submit-staff-form', staffList.addStaff);
  $('body').on('click', '#add-lesson-form', addLesson.showLessonForm);
  $('body').on('click', '#addLesson', addLesson.addLessonEvent);
  $('body').on('click', '.update-lesson', updateLesson.updateLessonEvent);
  $('body').on('click', '#lessonUpdate', updateLesson.updateLesson);
  $('body').on('click', '.rideEditBtn', updateRide.updateRideForm);
  $('body').on('click', '.updateSubmit', updateRide.updateRide);
  $('body').on('click', '.edit-staff', staffList.showEditStaffForm);
  $('body').on('click', '#update-staff', staffList.editStaff);
  $('body').on('click', '.closeForm', updateRide.clearForm);
  $('body').on('click', '.createRideBtn', createRide.showRideForm);
  $('body').on('change', '#coaster-image', createRide.imageInputWatcher);
=======
  $('body').on('click', '.classLink', displayClasses.buildClassModule);
  $('body').on('click', '#navbar-students', buildStudents.buildStudentList);
  $('body').on('click', '.delete-student', deleteStudentEvent);
  $('body').on('click', '.edit-student', editStudentEvent);
  $('body').on('click', '.visitorLink', displayVisitors.printVisitor);
  $('body').on('click', '#remove-visitor', removeVisitor.deleteVisitor);
  $('body').on('click', '.deleteClassIcon', deleteClass.deleteClass);
  $('body').on('click', '#navbar-teacher', teacherList.buildTeacherModule);
  $('body').on('click', '#add-student', showNewStudentForm);
  $('body').on('click', '#submit-new-student', submitNewStudentForm);
  $('body').on('click', '#submit-update-student', submitUpdateStudentForm);
  $('body').on('click', '.delete-teacher', teacherList.deleteTeacher);
  $('body').on('click', '.navwhale', homescreen.buildHomeScreen);
  $('body').on('click', '.show-teacher-form', newTeacher.buildTeacherForm);
  $('body').on('click', '.submit-teacher-form', teacherList.addTeacher);
  $('body').on('click', '#add-vis-form', addVisitor.showVisForm);
  $('body').on('click', '#addVisitor', addVisitor.addVisitorEvent);
  $('body').on('click', '.update-visitor', updateVisitor.updateVisEvent);
  $('body').on('click', '#visitorUpdate', updateVisitor.updateVisitor);
  $('body').on('click', '.classEditBtn', updateClass.updateClassForm);
  $('body').on('click', '.updateSubmit', updateClass.updateClass);
  $('body').on('click', '.edit-teacher', teacherList.showEditTeacherForm);
  $('body').on('click', '#update-teacher', teacherList.editTeacher);
  $('body').on('click', '.closeForm', updateClass.clearForm);
  $('body').on('click', '.createClassBtn', addClass.showClassForm);
  $('body').on('change', '#coaster-image', addClass.imageInputWatcher);
>>>>>>> master
};

export default {
  createListeners,
};
