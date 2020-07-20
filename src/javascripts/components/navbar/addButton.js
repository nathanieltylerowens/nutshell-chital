// add info form to be moved here once reworked to account for selected category
// currently found in addClasses

import utils from '../../helpers/utils';
import addClass from '../classes/addClass/addClass';
import addStudents from '../students/addStudent/addStudentForm';

const buildNone = () => {
  const domString = '<h2>Please select a category to add information</h2>';
  utils.printToDom('#selected-add', domString);
};

const buildSelected = () => {
  if (utils.dataSelector() === 'classes') {
    addClass.buildClassForm();
  } else if (utils.dataSelector() === 'students') {
    addStudents.buildAddStudentForm();
  } else {
    console.warn('no');
    buildNone();
  }
};

const buildAddForm = () => {
  const domString = `
<form class = "add-form">
  <div class="form-row" id="selected-add">
  </div>
</form>
  `;
  utils.printToDom('#main-add-form', domString);
  buildSelected();
};

const addButtonEvent = () => {
  $('#main-add-form').toggleClass('hidden');
  $('body').toggleClass('add-display');
  buildSelected();
};

const addButtonClick = () => {
  $('#addButton').click(addButtonEvent);
};

export default { buildAddForm, addButtonClick, buildSelected };
