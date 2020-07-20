import axios from 'axios';
import apiKeys from '../../helpers/apiKeys.json';
import utils from '../../helpers/utils';
import buildTeachers from './buildTeacher/buildTeachers';

const getTeachers = () => utils.readData('teachers');

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const addTeacher = (newTeacherObj) => axios.post(`${baseUrl}/teachers.json`, newTeacherObj);

const addTeacherEvent = (e) => {
  e.preventDefault();

  const newTeacher = {
    name: $('#name').val(),
    imageUrl: $('#imageUrl').val(),
    tenured: $('#tenured').prop('checked'),
  };

  addTeacher(newTeacher)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      teacherMaker();
      utils.printToDom('#new-teacher', '');
    })
    .catch((err) => console.error('get teachers didnt work', err));
};

const teacherMaker = () => {
  getTeachers()
    .then((teachers) => {
      let domString = '';
      teachers.forEach((teacher) => {
        domString += buildTeachers.buildTeachers(teacher);
      });
      domString += `
      <div id="new-teacher"><div>
      `;
      utils.printToDom('#cards-container', domString);
    })
    .catch((err) => console.error('get teachers broke', err));
};

const teacherEventListeners = () => {
  $('body').on('click', '#submit-teacher', addTeacherEvent);
};

export default { teacherEventListeners, teacherMaker };
