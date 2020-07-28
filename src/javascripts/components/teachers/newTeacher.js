import utils from '../../helpers/utils';

const buildTeacherForm = () => {
  $('.show-teacher-form').addClass('hide');
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  const domString = `
  <div class="closeButton">
  <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <form id="new-hire-form">
    <div class="form-group">
      <label class="teacher-form" for="teacher-name">Name</label>
      <input type="text" class="form-control" id="teacher-name">
    </div>
    <div class="form-group">
      <label class="teacher-form" for="teacher-image">Image URL</label>
      <input type="text" class="form-control" id="teacher-image">
    </div>
    <button type="submit" class="btn btn-primary submit-teacher-form" id="new-teacher">Submit</button>
  </form>
  `;

  utils.printToDom('.formDiv', domString);
};

export default { buildTeacherForm };
