import utils from '../../helpers/utils';

const buildTeacherForm = () => {
  const domString = `
  <form id="new-hire-form">
    <div class="form-group">
      <label for="teacher-name">Name</label>
      <input type="text" class="form-control" id="teacher-name">
    </div>
    <div class="form-group">
      <label for="teacher-image">Image URL</label>
      <input type="text" class="form-control" id="teacher-image">
    </div>
    <div class="form-group">
    <label for="teacher-id">Teacher ID</label>
    <input type="text" class="form-control" id="teacher-id">
  </div>
    <button type="submit" class="btn btn-primary submit-teacher-form" id="new-teacher">Submit</button>
  </form>
  `;

  utils.printToDom('#teacher-form', domString);
};

export default { buildTeacherForm };
