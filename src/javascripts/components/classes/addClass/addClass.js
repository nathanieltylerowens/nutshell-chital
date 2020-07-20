import utils from '../../../helpers/utils';

const buildClassForm = () => {
  const domString = `
<form class = "add-form">
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Class Name">
    </div><br>
    <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck1">
    <label class="form-check-label" for="gridCheck1">
      Monday
    </label>
    <input class="form-check-input" type="checkbox" id="gridCheck1">
    <label class="form-check-label" for="gridCheck1">
      Tuesday
    </label>
    <input class="form-check-input" type="checkbox" id="gridCheck1">
    <label class="form-check-label" for="gridCheck1">
      Wednesday
    </label>
    <input class="form-check-input" type="checkbox" id="gridCheck1">
    <label class="form-check-label" for="gridCheck1">
      Thursday
    </label>
    <input class="form-check-input" type="checkbox" id="gridCheck1">
    <label class="form-check-label" for="gridCheck1">
      Friday
    </label>
  </div>
  </div>
</form>
  `;
  utils.printToDom('#main-add-form', domString);
};

const addButtonEvent = () => {
  $('#main-add-form').toggleClass('hidden');
  $('body').toggleClass('add-display');
};

const addButtonClick = () => {
  $('#addButton').click(addButtonEvent);
};

export default { buildClassForm, addButtonClick };
