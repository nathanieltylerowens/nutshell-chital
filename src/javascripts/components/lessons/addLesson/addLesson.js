import './addLesson.scss';
import utils from '../../../helpers/utils';
import lessonData from '../../../helpers/data/lessonData';
import buildLessons from '../displayLessons/lesson';
import auth from '../../../helpers/data/authData';

const showLessonForm = () => {
  if (!auth.isAuthenticated()) return;
  const domString = `
    <form>
      <div class="form-group col-sm-8">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="lesson-name-val" placeholder="Name">
      </div>
      <div class="form-group col-sm-2">
      <label for="lesson-hours">Another label</label>
      <input type="text" class="form-control" id="lesson-hours-val" placeholder="How Long?">
    </div>
    <div class="form-check col-sm-2">
        <input class="form-check-input" type="checkbox" id="lesson-materials-val" value="true">
        <label class="form-check-label" for="lesson-materials">
          Materials Needed
        </label>
      <button class="btn btn-primary" id="addLesson">Submit</button>
    </form>
    `;
  utils.printToDom('#new-lesson-form', domString);
};

const addLessonEvent = () => {
  if (!auth.isAuthenticated()) return;
  const newLesson = {
    name: $('#lesson-name-lesson').val(),
    hours: $('#lesson-hours-val').val() * 1,
    materials: $('#atten-val').val(),
  };
  lessonData.addLesson(newLesson)
    .then(() => {
      buildLessons.printLessons();
      utils.printToDom('#new-lesson-form', '');
    })
    .catch((err) => console.error('add lesson broke', err));
};
export default {
  showLessonForm,
  addLessonEvent,
};
