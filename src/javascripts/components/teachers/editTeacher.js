import classesData from '../../helpers/data/classesData';
import classTeachersData from '../../helpers/data/teacher/classTeachersData';
import multiSelect from '../multiSelect/multiSelect';
import utils from '../../helpers/utils';
import authData from '../../helpers/data/authData';

const buildEditForm = (teacherId, {
  imageUrl,
  name,
}) => {
  $('.show-teacher-form').removeClass('hide');
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();

  classesData.getClasses()
    .then((classes) => {
      let availableClasses = classes;
      const enrolledClasses = [];
      classTeachersData.getClassTeachersByTeacherId(teacherId).then((currentClasses) => {
        currentClasses.forEach((currClass) => {
          enrolledClasses.push(classes.filter((obj) => obj.id === currClass.classesId)[0]);
          availableClasses = classes.filter((obj) => obj.id !== currClass.classesId);
        });

        let domString = `
        <div class="closeButton">
        <i class="fas fa-window-close closeForm mb-1"></i>
        </div>
        <form class="teacher-updater" id="${teacherId}">
          <div class="form-group">
            <label class="teacher-form" for="edit-teacher-name">Name</label>
            <input type="text" class="form-control" id="edit-teacher-name" value="${name}">
          </div>
          <div class="form-group">
            <label class="teacher-form" for="edit-teacher-image">Image URL</label>
            <input type="text" class="form-control" id="edit-teacher-image" value="${imageUrl}">
          </div>`;

        domString += multiSelect.createClassMultiSelect(availableClasses, enrolledClasses);

        domString += `
        <button type="submit" class="btn btn-primary" id="update-teacher">Submit</button>
        </form>
        `;

        utils.printToDom('.formDiv', domString);
        authData.checkLoginStatus();
      });
    })
    .catch((err) => console.error(err));
};

export default { buildEditForm };
