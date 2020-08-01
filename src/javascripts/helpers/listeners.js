import authData from './data/authData';
import displayLessons from '../components/lessons/displayLessons/lesson';
import removeLessons from '../components/lessons/deleteLessons/deleteLessons';
import teacherList from '../components/teachers/teacherList';
import displayClasses from '../components/classes/buildClasses/buildClasses';
import deleteClass from '../components/classes/deleteClass/deleteClass';
import buildStudents from '../components/student/studentList';
import studentData from './data/student/studentData';
import newStudent from '../components/student/newStudentForm';
import editStudent from '../components/student/editStudentForm';
import utils from './utils';
import updateClass from '../components/classes/editClass/editClass';
import homescreen from '../components/homescreen/homescreen';
import addLesson from '../components/lessons/addLesson/addLesson';
import updateLesson from '../components/lessons/editLesson/editLesson';
import newTeacher from '../components/teachers/newTeacher';
import addClass from '../components/classes/addClass/addClass';
import classInfo from '../components/classes/classDetails/classDetails';
import buildMajors from '../components/majors/majorList';
import majorData from './data/major/majorData';
import editMajor from '../components/majors/editMajorForm';
import newMajor from '../components/majors/newMajorForm';
import multiSelect from '../components/multiSelect/multiSelect';
import classStudents from '../components/classStudents/classStudents';
import majorClasses from '../components/majorClasses/majorClasses';

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

  const inputImageUrl = $('#inputImageUrl').val();
  const inputName = $('#inputName').val();
  const inputMajor = $('#inputMajor').val();
  const addedClasses = multiSelect.getSelectedMultiSelect();
  const availableClasses = multiSelect.getAvailableMultiSelect();

  const newStudentObj = {
    imageUrl: inputImageUrl,
    studentName: inputName,
    major: inputMajor,
  };

  studentData.updateStudent(fbStudentId, newStudentObj)
    .then(() => {
      classStudents.modifyClassStudents(fbStudentId, addedClasses, availableClasses);
    })
    .then(() => {
      utils.printToDom('#student-form', '');
      buildStudents.buildStudentList();
    })
    .catch((err) => console.error('Could not update student', err));
};

const submitNewStudentForm = (e) => {
  e.preventDefault();

  // get values from form
  const inputImageUrl = $('#inputImageUrl').val();
  const inputName = $('#inputName').val();
  const inputMajor = $('#inputMajor').val();

  const newStudentObj = {
    imageUrl: inputImageUrl,
    studentName: inputName,
    major: inputMajor,
  };

  studentData.addStudent(newStudentObj)
    .then(() => {
      utils.printToDom('#student-form', '');
      buildStudents.buildStudentList();
    })
    .catch((err) => console.error('Add Student failed', err));
};

const editMajorEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }

  const majorId = e.target.closest('.card').id;
  majorData.getMajorById(majorId)
    .then((response) => {
      const majorObj = response.data;

      // Create the edit form in the DOM
      editMajor.showEditMajorForm(majorId, majorObj);

      // Check if user is logged in and if so, remove 'hide' class
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('Could not retrieve Major', err));
};

const deleteMajorEvent = (e) => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }
  const majorId = e.target.closest('.card').id;
  majorData.deleteMajor(majorId)
    .then(() => {
      buildMajors.buildMajorList();
    })
    .catch((err) => console.error('Could not delete major', err));
};

const showNewMajorForm = () => {
  if (!authData.isAuthenticated()) {
    $('#myModal').modal('show');
    return;
  }
  newMajor.newMajorForm();
  authData.checkLoginStatus();
};

const submitUpdateMajorForm = (e) => {
  e.preventDefault();
  const fbMajorId = e.target.getAttribute('data-firebase-major-id');
  const addedClasses = multiSelect.getSelectedMultiSelect();
  const availableClasses = multiSelect.getAvailableMultiSelect();

  const inputName = $('#inputName').val();

  const newMajorObj = {
    name: inputName,
  };

  majorData.updateMajor(fbMajorId, newMajorObj)
    .then(() => {
      majorClasses.modifyMajorClasses(fbMajorId, addedClasses, availableClasses);
    })
    .then(() => {
      utils.printToDom('#major-form', '');
      buildMajors.buildMajorList();
    })
    .catch((err) => console.error('Could not update major', err));
};

const submitNewMajorForm = (e) => {
  e.preventDefault();

  // get values from form
  const inputName = $('#inputName').val();

  const newMajorObj = {
    name: inputName,
  };

  majorData.addMajor(newMajorObj)
    .then(() => {
      utils.printToDom('#major-form', '');
      buildMajors.buildMajorList();
    })
    .catch((err) => console.error('Add Major failed', err));
};

const createListeners = () => {
  $('body').on('click', '#navbar-lesson', displayLessons.printLessons);
  $('body').on('click', '#remove-lesson', removeLessons.deleteLesson);
  $('body').on('click', '#add-lesson-form', addLesson.showLessonForm);
  $('body').on('click', '#addLesson', addLesson.addLessonEvent);
  $('body').on('click', '#update-lesson', updateLesson.updateLessonEvent);
  $('body').on('click', '#lessonUpdate', updateLesson.updateLesson);
  $('body').on('click', '.classLink', displayClasses.buildClassModule);
  $('body').on('click', '#navbar-students', buildStudents.buildStudentList);
  $('body').on('click', '.delete-student', deleteStudentEvent);
  $('body').on('click', '.edit-student', editStudentEvent);
  $('body').on('click', '.deleteClassIcon', deleteClass.deleteClass);
  $('body').on('click', '#navbar-teacher', teacherList.buildTeacherModule);
  $('body').on('click', '#add-student', showNewStudentForm);
  $('body').on('click', '#submit-new-student', submitNewStudentForm);
  $('body').on('click', '#submit-update-student', submitUpdateStudentForm);
  $('body').on('click', '.delete-teacher', teacherList.deleteTeacher);
  $('body').on('click', '.navwhale', homescreen.buildHomeScreen);
  $('body').on('click', '.show-teacher-form', newTeacher.buildTeacherForm);
  $('body').on('click', '.submit-teacher-form', teacherList.addTeacher);
  $('body').on('click', '.classEditBtn', updateClass.updateClassForm);
  $('body').on('click', '.updateSubmit', updateClass.updateClass);
  $('body').on('click', '.edit-teacher', teacherList.showEditTeacherForm);
  $('body').on('click', '#update-teacher', teacherList.editTeacher);
  $('body').on('click', '.closeForm', utils.clearFormDiv);
  $('body').on('click', '.createClassBtn', addClass.showClassForm);
  $('body').on('change', '#class-image', addClass.imageInputWatcher);
  $('body').on('click', '.classInfoBtn', classInfo.showClassInfo);
  $('body').on('click', '.closeInfo', utils.clearInfoDiv);
  $('body').on('click', '#navbar-majors', buildMajors.buildMajorList);
  $('body').on('click', '#add-major', showNewMajorForm);
  $('body').on('click', '.delete-major', deleteMajorEvent);
  $('body').on('click', '.edit-major', editMajorEvent);
  $('body').on('click', '#submit-new-major', submitNewMajorForm);
  $('body').on('click', '#submit-update-major', submitUpdateMajorForm);
  $('body').on('click', '.studentName', classInfo.showGradeForm);
  $('body').on('click', '.gradeSubmitbtn', classInfo.assignGrade);
};

export default {
  createListeners,
};
