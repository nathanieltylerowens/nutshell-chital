import utils from '../../helpers/utils';

import buildClasses from '../classes/buildClasses/buildClasses';
import buildStudent from '../students/buildStudent/buildStudent';
import lesson from '../lessons/lesson';
import buildTeachers from '../teachers/buildTeacher/buildTeachers';
import addLesson from '../lessons/addLesson/addLessonForm';
import addButton from './addButton';

const defaultMain = () => {
  const domString = '<img src="../../../assets/default-main.jpg">';
  utils.printToDom('#cards-container', domString);
};

const buildCards = (e) => {
  e.preventDefault();
  $('#default-main').addClass('hidden');
  $('#cards-container').removeClass('hidden');
  utils.readData(e.target.value);
  if (e.target.value === 'classes') {
    buildClasses.buildClasses();
    utils.selector('classes');
  } else if (e.target.value === 'students') {
    buildStudent.buildStudents();
    utils.selector('students');
  } else if (e.target.value === 'lessons') {
    lesson.lessonMaker();
    addLesson.buildLessonForm();
    utils.selector('lessons');
  } else if (e.target.value === 'teachers') {
    buildTeachers.buildTeachers();
    utils.selector('teachers');
  } else {
    defaultMain();
  }
  addButton.buildSelected();
};

const filterClicks = () => {
  $('.filterButton').click(buildCards);
};

export default { filterClicks };
