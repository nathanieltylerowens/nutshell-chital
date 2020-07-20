import utils from '../../../helpers/utils';

const buildClassForm = () => {
  const domString = `
  <div>
    <h1>Add Class</h1><br>
    <div class="form-body">
      <div class="col">
        <input type="text" class="form-control" placeholder="Class Name">
      </div></br>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Monday
        </label></br>
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Tuesday
        </label></br>
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Wednesday
        </label></br>
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Thursday
        </label></br>
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Friday
        </label>
      </div>
    </div></br>
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  `;
  utils.printToDom('#selected-add', domString);
};

export default { buildClassForm };
