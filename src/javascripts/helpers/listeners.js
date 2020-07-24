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

  const newStudentObj = {
    imageUrl: inputImageUrl,
    studentName: inputName,
    major: inputMajor,
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

const createListeners = () => {
  $('body').on('click', '.lessonLink', displayLessons.printLessons);
  $('body').on('click', '#remove-lesson', removeLessons.deleteLesson);
  $('body').on('click', '#add-lesson-form', addLesson.showLessonForm);
  $('body').on('click', '#addLesson', addLesson.addLessonEvent);
  $('body').on('click', '.update-lesson', updateLesson.updateLessonEvent);
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
  $('body').on('click', '.closeForm', updateClass.clearForm);
  $('body').on('click', '.createClassBtn', addClass.showClassForm);
  $('body').on('change', '#class-image', addClass.imageInputWatcher);
};

export default {
  createListeners,
};
