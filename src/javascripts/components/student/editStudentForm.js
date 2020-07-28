import authData from '../../helpers/data/authData';
import classesData from '../../helpers/data/classesData';
import multiSelect from '../multiSelect/multiSelect';
import utils from '../../helpers/utils';

const showEditStudentForm = (fbStudentId, {
  imageUrl,
  studentName,
  major,
}) => {
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();

  classesData.getClasses()
    .then((classes) => {
      let domString = `
  <div class="container">
  <div class="closeButton">
    <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h5 class="homeH3">Update Student</h5>
  <form id="edit-student-form">
    <div class="form-group">
      <label for="inputImageUrl">Address</label>
      <input type="text" class="form-control" id="inputImageUrl" value="${imageUrl}">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="${studentName}">
      </div>
      <div class="form-group col-md-4">
        <label for="inputMajor">Phone Number</label>
        <input type="text" class="form-control" id="inputMajor" value="${major}">
      </div>
    </div>`;

      domString += multiSelect.createMultiSelect(classes);

      domString += `
    <button type="submit" class="btn btn-primary" id="submit-update-student" data-firebase-student-id="${fbStudentId}">Update Student</button>
  </form> 
  </div>
  `;

      utils.printToDom('.formDiv', domString);
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('Could not get classes for showEditForm', err));
};

export default {
  showEditStudentForm,
};
