import classData from '../../../helpers/data/classesData';
import buildClass from '../buildClasses/buildClasses';
import utils from '../../../helpers/utils';
import auth from '../../../helpers/data/authData';
import './editClass.scss';

const updateSchedule = () => {
  let schedString = '';
  const isChecked = $('input[type=checkbox]:checked');
  for (let i = 0; i < isChecked.length; i += 1) {
    schedString += `${isChecked[i].value} `;
  }
  return schedString;
};

const updateClassForm = (e) => {
  const classId = e.target.closest('.card').id;
  $('.createClassBtn').removeClass('hide');
  $('.formDiv').removeClass('hide');
  utils.addFormGrid();
  classData.getClasses()
    .then((classes) => {
      const classById = classes.find((singleClass) => singleClass.id === classId);
      const domString = `
        <div class="closeButton">
        <i class="fas fa-window-close closeForm mb-1"></i>
        </div>
        <h5 class="homeH3 mb-0 text-center">Update Class</h5>
        <form>
        <div class="form-group mb-0">
        <label for="class-name" class="mb-0">Name:</label>
        <input type="text" class="form-control" id="class-name" value="${classById.name}">
        </div>
        <label for="custom-checkbox" class="mb-0 mt-2">Schedule:</label><br />
        <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="monday" value="M">
        <label class="custom-control-label" for="monday">Monday</label>
        </div>
        <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="tuesday" value="T">
        <label class="custom-control-label" for="tuesday">Tuesday</label>
        </div>
        <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="wednesday" value="W">
        <label class="custom-control-label" for="wednesday">Wednesday</label>
        </div>
        <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="thursday" value="R">
        <label class="custom-control-label" for="thursday">Thursday</label>
        </div>
        <div class="custom-control custom-checkbox custom-control-inline">
        <input type="checkbox" class="custom-control-input" id="friday" value="F">
        <label class="custom-control-label" for="friday">Friday</label>
        </div>
        <div class="form-group mb-0">
        <label for="class-image" class="mb-0 mt-1">Image URL:</label>
        <input type="text" class="form-control" id="class-image" value="${classById.imageUrl}">
        </div>
        <button type="button" class="btn btn-primary updateSubmit mt-2" data-classid="${classById.id}">Update</button>
        </form>
  `;
      utils.printToDom('.formDiv', domString);
    })
    .catch((err) => (err));
};

const updateClass = () => {
  if (!auth.isAuthenticated()) return;
  const classId = $('.updateSubmit').data('classid');
  const updatedClassObj = {
    name: $('#class-name').val(),
    schedule: updateSchedule(),
    imageUrl: $('#class-image').val(),
  };
  classData.updateClass(classId, updatedClassObj)
    .then(() => buildClass.buildClassModule())
    .catch((err) => (err));
};

export default {
  updateClassForm,
  updateClass,
};
