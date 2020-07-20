import axios from 'axios';
import apiKeys from '../../helpers/data/apiKeys.json';
import utils from '../../helpers/utils';
import lessonsMakers from './lessonMaker';
import lessonEdit from './editLesson/editLesson';

const getLessons = () => utils.readData('lessons');

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const addLesson = (newLessonObj) => axios.post(`${baseUrl}/lessons.json`, newLessonObj);
const deleteLesson = (lessonId) => axios.delete(`${baseUrl}/lessons/${lessonId}.json`, lessonId);
const editLesson = (lessonId, editedLesson) => axios.put(`${baseUrl}/lessons/${lessonId}.json`, editedLesson);

const showEditForm = (e) => {
  const lesson = e.target.closest('.card').id;
  lessonEdit.editLessonForm(lesson);
  $('#global-edit-form').removeClass('hidden');
};

const updateLesson = (e) => {
  e.preventDefault();
  const lessonId = e.target.closest('.edit-lesson').id;
  const changeLesson = {
    name: $('#edit-lesson-name').val(),
    hours: $('#edit-lesson-hours').val(),
    materialsProvided: $('#edit-lesson-materials').prop('checked'),
  };
  editLesson(lessonId, changeLesson)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      lessonMaker();
      utils.printToDom('#edited-lesson', '');
    })
    .catch((err) => console.error('could not edit lesson', err));
  console.error('does this work');
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
      domString += `
      <div id="new-lesson"><div>
      <div id="edited-lesson"><div>
      `;
      utils.printToDom('#cards-container', domString);
    })
    .catch((err) => console.error('get lessons broke *sad panda*', err));
};

const lessonEventListeners = () => {
  $('body').on('click', '#submit-lesson', addLessonEvent);
  $('body').on('click', '#delete-lesson', removeLesson);
  $('body').on('click', '#edit-lesson-form', showEditForm);
  $('body').on('click', '#edit-lesson', updateLesson);
};

export default { lessonMaker, lessonEventListeners };
