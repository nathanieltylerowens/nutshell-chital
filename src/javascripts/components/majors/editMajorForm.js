import utils from '../../helpers/utils';

const showEditMajorForm = (fbMajorId, {
  name,
}) => {
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  const domString = `
  <div class="container">
  <div class="closeButton">
    <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h2>Update Major</h2>
  <form class="hide" id="edit-major-form">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="${name}">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-update-major" data-firebase-major-id="${fbMajorId}">Update Major</button>
  </form> 
  </div>
  `;

  utils.printToDom('.formDiv', domString);
};

export default {
  showEditMajorForm,
};
