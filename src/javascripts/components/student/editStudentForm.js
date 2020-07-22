import utils from '../../helpers/utils';

const showEditStudentForm = (fbStudentId, {
  address,
  name,
  phoneNumber,
  product,
  studentId,
}) => {
  const domString = `
  <div class="container">
  <h2>Update Student</h2>
  <form class="hide" id="edit-student-form">
    <div class="form-group">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" value="${address}">
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" value="${name}">
      </div>
      <div class="form-group col-md-4">
        <label for="inputPhone">Phone Number</label>
        <input type="text" class="form-control" id="inputPhone" value="${phoneNumber}">
      </div>
      <div class="form-group col-md-2">
        <label for="inputProduct">Product</label>
        <input type="text" class="form-control" id="inputProduct" value="${product}">
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-update-student" data-firebase-student-id="${fbStudentId}" data-studentId="${studentId}">Update Student</button>
  </form> 
  </div>
  `;

  utils.printToDom('#student-form', domString);
};

export default {
  showEditStudentForm,
};
