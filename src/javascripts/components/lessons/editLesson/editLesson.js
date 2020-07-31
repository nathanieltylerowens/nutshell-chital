import './editLesson.scss';
import utils from '../../../helpers/utils';
import lessonData from '../../../helpers/data/lesson/lessonData';
import classesData from '../../../helpers/data/classesData';
import lessonClassData from '../../../helpers/data/lesson/lessonClassData';
import multiSelect from '../../multiSelect/multiSelect';
import auth from '../../../helpers/data/authData';
import buildLessons from '../displayLessons/lesson';

const makeMaterialSelectForm = (lesson) => {
  const domString = `
    <select class="form-control" id="edit-lesson-material-val" value="${lesson.materialsProvided}">
      <option ${(lesson.materialsProvided === 'Yes') ? 'selected' : ''}>Yes</option>
      <option ${(lesson.materialsProvided === 'No') ? 'selected' : ''}>No</option>
    </select>
  `;
  return domString;
};

const makeMultiSelectLessons = (lessonId) => {
  classesData.getClasses()
    .then((classes) => {
      let availableClasses = classes;
      const enrolledClasses = [];
      lessonClassData.getClassByLesson(lessonId).then((currentClasses) => {
        currentClasses.forEach((currClass) => {
          enrolledClasses.push(classes.filter((obj) => obj.id === currClass.classesId)[0]);
          availableClasses = classes.filter((obj) => obj.id !== currClass.classesId);
        });
        const domString = multiSelect.createClassMultiSelect(availableClasses, enrolledClasses);
        utils.printToDom('.lesson-multi', domString);
        auth.checkLoginStatus();
      });
    })
    .catch((err) => console.error('lesson multi broke', err));
};

const updateLessonForm = (lessonId) => {
  if (!auth.isAuthenticated()) return;
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  lessonData.getLessonById(lessonId)
    .then((response) => {
      const lesson = response.data;
      let domString = `
      <div class="closeButton">
        <i class="fas fa-window-close closeForm mb-1"></i>
      </div>
      <form class="formUpdate" id="${lessonId}">
        <div class="form-group col-sm-8">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="edit-lesson-name-val" placeholder="Name" value="${lesson.name}">
        </div>
        <div class="form-group col-sm-6">
        <label for="lesson-hours">Length:</label>
        <input type="text" class="form-control" id="edit-lesson-hours-val" placeholder="How Long?" value="${lesson.hours}">
      </div>
      <div class="form-check col-sm-6">
        <label >Materials Provided:</label>`;
      domString += makeMaterialSelectForm(lesson);
      domString += '</div>';
      domString += '<div class="lesson-multi"></div>';
      domString += `<button class="btn btn-primary updateButton" id="lessonUpdate" value="${lesson.id}">Submit</button>
      </form>
      `;
      utils.printToDom('.formDiv', domString);
    })
    .catch((err) => console.error('update lesson form broke', err));
};

const updateLessonEvent = (e) => {
  if (!auth.isAuthenticated()) return;
  updateLessonForm(e.target.closest('.card').id);
  makeMultiSelectLessons(e.target.closest('.card').id);
};

const updateLesson = (e) => {
  e.preventDefault();
  if (!auth.isAuthenticated()) return;
  const updateLessonId = e.target.closest('#lessonUpdate').form.id;
  const editedLesson = {
    name: $('#edit-lesson-name-val').val(),
    hours: $('#edit-lesson-hours-val').val(),
    materialsProvided: $('#edit-lesson-material-val').val(),
  };
  lessonData.updateLessonsData(updateLessonId, editedLesson)
    .then(() => {
      buildLessons.printLessons();
      utils.printToDom('#new-lesson-form', '');
    })
    .catch((err) => console.error('update lesson broke', err));
};

export default {
  updateLesson,
  updateLessonForm,
  updateLessonEvent,
  makeMultiSelectLessons,
};
