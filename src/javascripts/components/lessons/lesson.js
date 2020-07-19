import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import utils from '../../helpers/utils';
import lessonsMakers from './lessonMaker';

const getLessons = () => utils.readData('lessons');

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const addLesson = (newLessonObj) => axios.post(`${baseUrl}/lessons.json`, newLessonObj);
const deleteLesson = (lessonId) => axios.delete(`${baseUrl}/lessons/${lessonId}.json`, lessonId);
const editLesson = (lessonId, editedLesson) => axios.put(`${baseUrl}/mushrooms/${lessonId}.json`, editedLesson);

const updateLesson = (e) => {
  e.preventDefault();
  const lessonId = 
};

const removeLesson = (e) => {
  deleteLesson(e.target.closest('.card').id)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      lessonMaker();
    })
    .catch((err) => console.error('could not remove lesson', err));
};

const addLessonEvent = (e) => {
  e.preventDefault();

  const newLesson = {
    name: $('#lesson-name').val(),
    hours: $('#lesson-hours').val(),
    materialsProvided: $('#lesson-materials').prop('checked'),
  };

  addLesson(newLesson)
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
      utils.printToDom('#cards-container', domString);
    })
    .catch((err) => console.error('get lessons broke *sad panda*', err));
};

const lessonEventListeners = () => {
  $('body').on('click', '#submit-lesson', addLessonEvent);
  $('body').on('click', '#delete-lesson', removeLesson);
};

export default { lessonMaker, lessonEventListeners, removeLesson };
