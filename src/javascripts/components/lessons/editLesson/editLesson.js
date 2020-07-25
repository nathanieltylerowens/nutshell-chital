import './editLesson.scss';
import utils from '../../../helpers/utils';
import lessonData from '../../../helpers/data/lessonData';
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

const updateLessonForm = (lessonId) => {
  if (!auth.isAuthenticated()) return;
  lessonData.getLessonById(lessonId)
    .then((response) => {
      const lesson = response.data;

      let domString = `
      <form class="formUpdate" id="${lessonId}">
        <div class="form-group col-sm-8">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="edit-lesson-name-val" placeholder="Name" value="${lesson.name}">
        </div>
        <div class="form-group col-sm-2">
        <label for="lesson-hours">Length:</label>
        <input type="text" class="form-control" id="edit-lesson-hours-val" placeholder="How Long?" value="${lesson.hours}">
      </div>
      <div class="form-check col-sm-2">
        <label >Materials Provided:</label>`;
      domString += makeMaterialSelectForm(lesson);
      domString += `
          </div>
        <button class="btn btn-primary updateButton" id="lessonUpdate" value="${lesson.id}">Submit</button>
      </form>
      `;
      utils.printToDom('#new-lesson-form', domString);
    })
    .catch((err) => console.error('update lesson form broke', err));
};

const updateLessonEvent = (e) => {
  if (!auth.isAuthenticated()) return;
  updateLessonForm(e.target.closest('.card').id);
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
  console.error(updateLessonId, editedLesson);
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
};
