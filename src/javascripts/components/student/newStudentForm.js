import utils from '../../helpers/utils';

const newStudentForm = () => {
  const domString = `
  <div class="container">
  <h5 class="homeH3">New Student</h5>
  <form class="hide" id="new-student-form">
    <div class="form-group">
      <label for="inputImageUrl">Address</label>
      <input type="text" class="form-control" id="inputImageUrl" placeholder="https://www.imgur.com">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Student Name</label>
        <input type="text" class="form-control" id="inputName">
      </div>
      <div class="form-group col-md-4">
        <label for="inputMajor">Major</label>
        <input type="text" class="form-control" id="inputMajor">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-new-student">Submit New Student</button>
  </form> 
  </div>
  `;

  utils.printToDom('#student-form', domString);
};

export default {
  newStudentForm,
};
