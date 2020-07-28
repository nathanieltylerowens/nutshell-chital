const getSelectedMultiSelect = () => {
  // inputClasses returns a collection of option values
  // which were selected by the user (added to the right select box)
  const inputClasses = $('#undo_redo_to').children('option');

  // This pulls the inputClasses values (which are the class id's) and puts them in an array called 'addedClasses'
  const addedClasses = $.map(inputClasses, (option) => option.value);

  return addedClasses;
};

const createClassMultiSelect = (classes) => {
  let selectDomString = `
  <div class="row">
      <div class="col mr-2">
        <p class="text-center homeH3">Available Classes</p>
        <select name="from" id="undo_redo" class="form-control" size="13" multiple="multiple">`;

  classes.forEach((singleClass) => {
    selectDomString += `
    <option value="${singleClass.id}">${singleClass.name}</option>
    `;
  });

  selectDomString += `
        </select>
      </div>
      <div class="col-xs-2 mx-2">
        <p class="text-center homeH3">Actions</p>
        <button type="button" id="undo_redo_undo" class="btn btn-primary btn-block">undo</button>
        <button type="button" id="undo_redo_rightAll" class="btn btn-default btn-block btn-secondary"><i class="fas fa-forward"></i></button>
        <button type="button" id="undo_redo_rightSelected" class="btn btn-default btn-block btn-secondary"><i class="fas fa-chevron-right"></i></button>
        <button type="button" id="undo_redo_leftSelected" class="btn btn-default btn-block btn-secondary"><i class="fas fa-chevron-left"></i></button>
        <button type="button" id="undo_redo_leftAll" class="btn btn-default btn-block btn-secondary"><i class="fas fa-backward"></i></button>
        <button type="button" id="undo_redo_redo" class="btn btn-warning btn-block">redo</button>
      </div>
      <div class="col mr-2">
        <p class="text-center homeH3">Selected Classes</p>
        <select name="to" id="undo_redo_to" class="form-control" size="13" multiple="multiple"></select>
      </div>
    </div>
    `;
  return selectDomString;
};

export default {
  createClassMultiSelect,
  getSelectedMultiSelect,
};
