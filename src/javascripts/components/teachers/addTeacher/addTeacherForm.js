import utils from '../../../helpers/utils';

const buildTeacherForm = () => {
  const domString = `
  <form>
    <div class="form-group">
      <label for="teacher-name">Example label</label>
      <input type="text" class="form-control" id="teacher-name" placeholder="teacher">
    </div>
    <div class="form-group">
      <label for="name">Another label</label>
      <input type="text" class="form-control" id="name" placeholder="Another input">
    </div>
    <div class="form-group">
      <label for="imageUrl">Another label</label>
      <input type="text" class="form-control" id="imageUrl" placeholder="Another input">
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="tenured" value="true">
        <label class="form-check-label" for="tenured">
          Example checkbox
        </label>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-teacher">Submit</button>
  </form>
  `;
  utils.printToDom('#selected-add', domString);
};

export default { buildTeacherForm };
