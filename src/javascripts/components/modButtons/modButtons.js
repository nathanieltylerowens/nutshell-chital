import utils from '../../helpers/utils';

const printModButtons = () => {
  const domString = `
    <a href="#" id="edit-class"><i class="far fa-edit"></i></a>
    <a href="#" id="delete-class"><i class="far fa-times-circle"></i></a>
    `;
  utils.printToDom('.modifyButtons', domString);
};

const noMods = () => {
  const domString = '';
  utils.printToDom('.modifyButtons', domString);
};

export default { printModButtons, noMods };
