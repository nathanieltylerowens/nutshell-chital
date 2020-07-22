/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './homescreen.scss';

const buildHomeScreen = () => {
  const domString = `
  <div class="homeContainer">
  <img src="https://i.imgur.com/ZkYEPXi.png"></img>
  <h3 class="homeH3">A Whale Of A Good Time!</h3>
  <div class="homeMessage">
  <p class="homeP">Thanks for visiting the new admin panel for Whalom Park, built by Nutshell Muntjac. From the Admin Panel you can view and edit park visitors, vendors, staff and rides. Log in to access CRUD features.</p>
  </div>
  </div>`;
  utils.printToDom('#content', domString);
};

export default {
  buildHomeScreen,
};
