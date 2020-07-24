import firebase from 'firebase/app';
import auth from '../../../helpers/data/authData';
import 'firebase/storage';
import 'firebase/auth';
import utils from '../../../helpers/utils';
import classData from '../../../helpers/data/classesData';
import buildClasses from '../buildClasses/buildClasses';

const addAClass = () => {
  if (!auth.isAuthenticated()) return;
  const file = $('#class-image')[0].files[0];
  const image = file.name;
  const ref = firebase.storage().ref(`classes/${image}`);
  const newClassObj = {
    name: $('#new-class-name').val(),
    schedule: $('#new-class-schedule').val(),
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
  const domString = `
  <div class="closeForm">
  <i class="fas fa-window-close closeForm mb-1"></i>
  </div>
  <h5 class="homeH3 mb-0 text-left">Create Class</h5>
  <form id="new-class-form">
  <div class="form-group">
  <label for="new-class-name" class="mb-0">Name:</label>
  <input type="text" class="form-control" id="new-class-name" placeholder="Name" required>
  </div>
  <div class="custom-file">
  <input type="file" class="custom-file-input" id="class-image" required>
  <label class="custom-file-label" for="class-image" id="class-image-label">Upload Class Image</label>
  </div>
  <div class="form-group mb-0">
  <label for="new-class-schedule" class="mb-0 mt-1">Schedule:</label>
  <input type="text" class="form-control" id="new-class-schedule" placeholder="Schedule" required>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Create</button>
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
