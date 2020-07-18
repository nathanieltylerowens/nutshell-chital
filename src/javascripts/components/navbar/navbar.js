import utils from '../../helpers/utils';
import buildClasses from '../classes/buildClasses/buildClasses';
import buildStudent from '../students/buildStudent/buildStudent';
import lesson from '../lessons/lesson';

const buildCards = (e) => {
  utils.readData(e.target.value);
  if (e.target.value === 'classes') {
    buildClasses.buildClasses();
  } else if (e.target.value === 'students') {
    buildStudent.buildStudents();
  } else if (e.target.value === 'lessons') {
    lesson.lessonMaker();
  } else {
    console.warn('teachers');
  }
};

const filterClicks = () => {
  $('.filterButton').click(buildCards);
};

export default { filterClicks };
