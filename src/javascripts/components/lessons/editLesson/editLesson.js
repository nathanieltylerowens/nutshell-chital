import './editLesson.scss';
import utils from '../../../helpers/utils';
import lessonData from '../../../helpers/data/lessonData';
import auth from '../../../helpers/data/authData';
import buildLessons from '../displayLessons/lesson';

const updateLessonForm = (lessonId) => {
  if (!auth.isAuthenticated()) return;
  lessonData.getLessonById(lessonId)
    .then((response) => {
      const lesson = response.data;

      const domString = `
      <form>
        <div class="form-group col-sm-8">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="edit-lesson-name-val" placeholder="Name" value="${lesson.name}">
        </div>
        <div class="form-group col-sm-2">
        <label for="lesson-hours">Another label</label>
        <input type="text" class="form-control" id="edit-lesson-hours-val" placeholder="How Long?" value="${lesson.hours}">
      </div>
      <div class="form-check col-sm-2">
          <input class="form-check-input" type="checkbox" id="edit-lesson-materials-val" value="${lesson.materialProvided}">
          <label class="form-check-label" for="lesson-materials">
            Materials Needed
          </label>
        <button class="btn btn-primary" id="lessonUpdate">Submit</button>
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
  if (!auth.isAuthenticated()) return;
  const updateLessonId = e.target.closest('#lessonUpdate').form.id;
  const editedLesson = {
    name: $('#edit-lesson-name-val').val(),
    gender: $('#edit-lesson-hours-val').val() * 1,
    attendance: $('#edit-lesson-materials-val').val(),
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
};
