import utils from '../../../helpers/utils';

const showClassInfo = () => {
  $('.infoDiv').removeClass('hide');
  utils.addInfoGrid();
  const domString = `
  <div class="closeButton">
  <i class="fas fa-window-close closeInfo mb-1"></i>
  </div>
  <h5 class="homeH3 mb-0 text-center">Class Details</h5>`;
  utils.printToDom('.infoDiv', domString);
};

export default {
  showClassInfo,
};
