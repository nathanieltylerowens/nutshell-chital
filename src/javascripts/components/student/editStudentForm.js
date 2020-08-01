import authData from '../../helpers/data/authData';
import classesData from '../../helpers/data/classesData';
import classStudentsData from '../../helpers/data/classStudents/classStudentsData';
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
      // call `getClassStudentsByStudentId` and save results to `currentClasses` variable
      // then remove `currentClasses` from `classes` saving the final result to `availableClasses`
      let availableClasses = classes;
      const enrolledClasses = [];
      classStudentsData.getClassStudentsByStudentId(fbStudentId).then((currentClasses) => {
        currentClasses.forEach((currClass) => {
          enrolledClasses.push(classes.filter((obj) => obj.id === currClass.classesId)[0]);
          availableClasses = classes.filter((obj) => obj.id !== currClass.classesId);
        });

        let domString = `
          <div class="container">
          <div class="closeButton">
            <i class="fas fa-window-close closeForm mb-1"></i>
          </div>
          <h5 class="homeH3">Update Student</h5>
          <form id="edit-student-form">
            <div class="form-group">
              <label for="inputImageUrl" class="homeH3">Image URL</label>
              <input type="text" class="form-control" id="inputImageUrl" value="${imageUrl}">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName" class="homeH3">Name</label>
                <input type="text" class="form-control" id="inputName" value="${studentName}">
              </div>
              <div class="form-group col-md-4">
                <label for="inputMajor" class="homeH3">Major</label>
                <input type="text" class="form-control" id="inputMajor" value="${major}">
              </div>
            </div>`;

        domString += multiSelect.createClassMultiSelect(availableClasses, enrolledClasses);

        domString += `
            <button type="submit" class="btn btn-primary drop-shadow-1" id="submit-update-student" data-firebase-student-id="${fbStudentId}">Update Student</button>
          </form> 
          </div>
        `;

        utils.printToDom('.formDiv', domString);
        authData.checkLoginStatus();
      });
    })
    .catch((err) => console.error('Could not get classes for showEditForm', err));
};

export default {
  showEditStudentForm,
};
