import utils from '../../../helpers/utils';

const editLessonForm = (lesson) => {
  const domString = `
  <form class="edit-lesson" id="${lesson}">
    <div class="form-group">
      <label for="edit-lesson-name">Example label</label>
      <input type="text" class="form-control" id="edit-lesson-name" placeholder="lesson">
    </div>
    <div class="form-group">
      <label for="edit-lesson-hours">Another label</label>
      <input type="text" class="form-control" id="edit-lesson-hours" placeholder="Another input">
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="edit-lesson-materials" value="true">
        <label class="form-check-label" for="edit-lesson-materials">
          Example checkbox
        </label>
    </div>
    <button type="submit" class="btn btn-primary" id="edit-lesson">Submit</button>
  </form>
  `;
  utils.printToDom('#global-edit-form', domString);
};

export default { editLessonForm };
