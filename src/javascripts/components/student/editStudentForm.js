import utils from '../../helpers/utils';
import './editStudentForm.scss';

const showEditStudentForm = (fbStudentId, {
  imageUrl,
  studentName,
  major,
}) => {
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();

  const domString = `
  <div class="container">
  <div class="closeButton">
    <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h2>Update Student</h2>
  <form class="hide" id="edit-student-form">
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
    </div>
    <div class="row">
      <div class="col-xs-5 mx-2">
        <select name="from" id="undo_redo" class="form-control" size="13" multiple="multiple">
          <option value="2">C#</option>
          <option value="1">C++</option>
          <option value="3">Haskell</option>
          <option value="4">Java</option>
          <option value="5">JavaScript</option>
          <option value="6">Lisp</option>
          <option value="7">Lua</option>
          <option value="8">MATLAB</option>
          <option value="9">NewLISP</option>
          <option value="10">PHP</option>
          <option value="11">Perl</option>
          <option value="12">SQL</option>
          <option value="13">Unix shell</option>
        </select>
      </div>
      <div class="col-xs-2 mx-2">
        <button type="button" id="undo_redo_undo" class="btn btn-primary btn-block">undo</button>
        <button type="button" id="undo_redo_rightAll" class="btn btn-default btn-block btn-secondary"><i class="fas fa-forward"></i></button>
        <button type="button" id="undo_redo_rightSelected" class="btn btn-default btn-block btn-secondary"><i class="fas fa-chevron-right"></i></button>
        <button type="button" id="undo_redo_leftSelected" class="btn btn-default btn-block btn-secondary"><i class="fas fa-chevron-left"></i></button>
        <button type="button" id="undo_redo_leftAll" class="btn btn-default btn-block btn-secondary"><i class="fas fa-backward"></i></button>
        <button type="button" id="undo_redo_redo" class="btn btn-warning btn-block">redo</button>
      </div>
      <div class="col-xs-5 mx-2">
        <select name="to" id="undo_redo_to" class="form-control" size="13" multiple="multiple"></select>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submit-update-student" data-firebase-student-id="${fbStudentId}">Update Student</button>
  </form> 
  </div>
  `;

  utils.printToDom('.formDiv', domString);
};

export default {
  showEditStudentForm,
};
