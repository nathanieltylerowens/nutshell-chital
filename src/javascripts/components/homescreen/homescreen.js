/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './homescreen.scss';

const buildHomeScreen = () => {
  const domString = `
  <div class="homeContainer">
  <img class="homeImg" src="https://i.imgur.com/PxCmZsS.jpg"></img>
  <h3 class="homeH3">Bozo University Admin Panel</h3>
  <div class="homeMessage">
  <p class="homeP">Placeholder</p>
  </div>
  </div>`;
  utils.printToDom('#content', domString);
};

export default {
  buildHomeScreen,
};
