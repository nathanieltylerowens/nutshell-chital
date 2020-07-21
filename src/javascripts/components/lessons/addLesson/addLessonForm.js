import utils from '../../../helpers/utils';

const buildLessonForm = () => {
  const domString = `
  <form>
    <div class="form-group">
      <label for="lesson-name">Example label</label>
      <input type="text" class="form-control" id="lesson-name" placeholder="lesson">
    </div>
    <div class="form-group">
      <label for="lesson-hours">Another label</label>
      <input type="text" class="form-control" id="lesson-hours" placeholder="Another input">
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="lesson-materials" value="true">
        <label class="form-check-label" for="lesson-materials">
          Example checkbox
        </label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-lesson">Submit</button>
  </form>
  `;
  utils.printToDom('#selected-add', domString);
};

export default { buildLessonForm };
