import utils from '../../helpers/utils';

const newMajorForm = () => {
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  const domString = `
  <div class="closeButton">
    <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <div class="container">
  <h5 class="homeH3">New Major</h5>
  <form class="hide" id="new-major-form">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Major Name</label>
        <input type="text" class="form-control" id="inputName">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-new-major">Submit New Major</button>
  </form> 
  </div>
  `;

  utils.printToDom('.formDiv', domString);
};

export default {
  newMajorForm,
};
