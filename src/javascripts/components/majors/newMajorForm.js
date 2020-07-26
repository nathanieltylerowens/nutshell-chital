import utils from '../../helpers/utils';

const newMajorForm = () => {
  const domString = `
  <div class="container">
  <h2>New Major</h2>
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

  utils.printToDom('#major-form', domString);
};

export default {
  newMajorForm,
};
