import utils from '../../helpers/utils';
import lessonsMakers from './lessonMaker';

const getLessons = () => utils.readData('lessons');

const addLessonEvent = (e) => {
  e.preventDefault();

  const newLesson = {
    name: $('#lesson-name').val(),
    hours: $('#lesson-hours').val(),
    materialsProvided: $('#lesson-materials').prop('checked'),
  };

  utils.addLesson(newLesson)
    .then(() => {
    // eslint-disable-next-line no-use-before-define
      lessonMaker();
      utils.printToDom('#new-lesson', '');
    })
    .catch((err) => console.error('get lessons didnt work', err));
};

const lessonMaker = () => {
  getLessons()
    .then((lessons) => {
      let domString = '';
      lessons.forEach((lesson) => {
        domString += lessonsMakers.lessonBuilder(lesson);
      });
      domString += '<div id="new-lesson"><div>';
      utils.printToDom('#lessons-container', domString);
    })
    .catch((err) => console.error('get lessons broke *sad panda*', err));
};

const lessonEventListeners = () => {
  $('body').on('click', '#submit-lesson', addLessonEvent);
};

export default { lessonMaker, lessonEventListeners };
