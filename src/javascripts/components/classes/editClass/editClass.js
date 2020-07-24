import classData from '../../../helpers/data/classesData';
import buildClass from '../buildClasses/buildClasses';
import utils from '../../../helpers/utils';
import auth from '../../../helpers/data/authData';
import './editClass.scss';

const updateClassForm = (e) => {
  const classId = e.target.closest('.card').id;
  $('.createClassBtn').addClass('hide');
  classData.getClasses()
    .then((classes) => {
      const classById = classes.find((singleClass) => singleClass.id === classId);
      const domString = `
        <div class="closeForm">
        <i class="fas fa-window-close closeForm mb-1"></i>
        </div>
        <h5 class="homeH3 mb-0 text-left">Update Class</h5>
        <form>
        <div class="form-group mb-0">
        <label for="class-name" class="mb-0">Name:</label>
        <input type="text" class="form-control" id="class-name" value="${classById.name}">
        </div>
        <div class="form-group mb-0">
        <label for="class-image" class="mb-0 mt-1">Image URL:</label>
        <input type="text" class="form-control" id="class-image" value="${classById.imageUrl}">
        </div>
        <div class="form-group mb-0">
        <label for="class-schedule" class="mb-0 mt-1">Schedule:</label>
        <input type="text" class="form-control" id="class-schedule" value="${classById.schedule}">
        </div>
        <button type="button" class="btn btn-primary updateSubmit mt-2" data-classid="${classById.id}">Update</button>
        </form>
  `;
      utils.printToDom('.classForm', domString);
    })
    .catch((err) => (err));
};

const updateClass = () => {
  if (!auth.isAuthenticated()) return;
  const classId = $('.updateSubmit').data('classid');
  const updatedClassObj = {
    name: $('#class-name').val(),
    schedule: $('#class-schedule').val(),
    imageUrl: $('#class-image').val(),
  };
  classData.updateClass(classId, updatedClassObj)
    .then(() => buildClass.buildClassModule())
    .catch((err) => (err));
};

const clearForm = () => {
  $('.createClassBtn').removeClass('hide');
  const domString = '';
  utils.printToDom('.classForm', domString);
};

export default {
  updateClassForm,
  updateClass,
  clearForm,
};
