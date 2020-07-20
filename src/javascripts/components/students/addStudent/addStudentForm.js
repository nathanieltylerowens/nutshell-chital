import utils from '../../../helpers/utils';

const buildAddStudentForm = () => {
  const domString = `
    <form>
    <div class="form-group">
    <label for="formGroupExampleInput">Add Student</label>
    <input type="text" class="form-control" id="studentName" placeholder="Student Name">
    </div>
    <div class="form-group">
    <input type="text" class="form-control" id="studentMajor" placeholder="Student Major">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" id="studentPhoto" placeholder="URL of Student Photo">
  </div>
  <button type="submit" class="btn btn-primary" id="submit-students">Submit</button>
</form>
    `;
  utils.printToDom('#selected-add', domString);
};

export default { buildAddStudentForm };
