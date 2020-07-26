import firebase from 'firebase/app';
import auth from '../../../helpers/data/authData';
import 'firebase/storage';
import 'firebase/auth';
import utils from '../../../helpers/utils';
import classData from '../../../helpers/data/classesData';
import buildClasses from '../buildClasses/buildClasses';

const getSchedule = () => {
  let schedString = '';
  const isChecked = $('input[type=checkbox]:checked');
  for (let i = 0; i < isChecked.length; i += 1) {
    schedString += `${isChecked[i].value} `;
  }
  return schedString;
};

const addAClass = () => {
  if (!auth.isAuthenticated()) return;
  const file = $('#class-image')[0].files[0];
  const image = file.name;
  const ref = firebase.storage().ref(`classes/${image}`);
  const newClassObj = {
    name: $('#new-class-name').val(),
    schedule: getSchedule(),
    imageUrl: '',
  };
  ref.put(file).then(() => {
    ref.getDownloadURL().then((url) => {
      newClassObj.imageUrl = url;
      classData.addNewClass(newClassObj)
        .then(() => buildClasses.buildClassModule());
    });
  })
    .catch((err) => (err));
};

function imageInputWatcher() {
  $('#class-image-label').html(this.files[0].name);
}

const showClassForm = () => {
  if (!auth.isAuthenticated()) return;
  $('.createClassBtn').addClass('hide');
  utils.gridCheckAdd();
  const domString = `
  <div class="closeForm">
  <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h5 class="homeH3 mb-0 text-left">Create Class</h5>
  <form id="new-class-form">
  <div class="form-group mb-2">
  <label for="new-class-name" class="mb-0">Name:</label>
  <input type="text" class="form-control" id="new-class-name" placeholder="Name" required>
  </div>
  <div class="form-group mb-0>
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
  <div class="custom-file mt-3">
  <input type="file" class="custom-file-input" id="class-image" required>
  <label class="custom-file-label" for="class-image" id="class-image-label">Upload Class Image</label>
  </div>
  <div class="form-group mb-0">
  <button type="submit" class="btn btn-primary mt-2">Create</button>
  </div>
  </form>
`;
  utils.printToDom('.classForm', domString);
  $('#new-class-form').on('submit', addAClass);
};

export default {
  showClassForm,
  addAClass,
  imageInputWatcher,

};
