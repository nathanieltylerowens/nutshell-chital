import utils from '../../../helpers/utils';

const showClassInfo = () => {
  utils.gridCheckAdd();
  const domString = `
  <div class="closeForm">
  <i class="fas fa-window-close closeInfo mb-1"></i>
  </div>
  <h5 class="homeH3 mb-0 text-left">Class Details</h5>`;
  utils.printToDom('.infoDiv', domString);
};

export default {
  showClassInfo,
};
