import authData from '../../helpers/data/authData';
import classesData from '../../helpers/data/classesData';
import majorClassesData from '../../helpers/data/majorClasses/majorClassesData';
import multiSelect from '../multiSelect/multiSelect';
import utils from '../../helpers/utils';

const showEditMajorForm = (fbMajorId, {
  name,
}) => {
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();

  classesData.getClasses()
    .then((classes) => {
      let availableClasses = classes;
      const selectedClasses = [];
      majorClassesData.getMajorClassesByMajorsId(fbMajorId).then((currentClasses) => {
        currentClasses.forEach((currClass) => {
          selectedClasses.push(classes.filter((obj) => obj.id === currClass.classesId)[0]);
          availableClasses = classes.filter((obj) => obj.id !== currClass.classesId);
        });

        let domString = `
      <div class="container">
      <div class="closeButton">
        <i class="fas fa-window-close closeForm mb-1"></i>
      </div>
      <h5 class="homeH3">Update Major</h5>
      <form class="hide" id="edit-major-form">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName" class="homeH3">Name</label>
            <input type="text" class="form-control" id="inputName" value="${name}">
          </div>
        </div>`;

        domString += multiSelect.createClassMultiSelect(availableClasses, selectedClasses);

        domString += `
        <button type="submit" class="btn btn-primary drop-shadow-1" id="submit-update-major" data-firebase-major-id="${fbMajorId}">Update Major</button>
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
  showEditMajorForm,
};
