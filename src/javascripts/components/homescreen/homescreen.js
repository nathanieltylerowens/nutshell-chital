/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './homescreen.scss';

const buildHomeScreen = () => {
  utils.clearGridClasses();
  const domString = `
  <div class="carocontainer">
  <div id="clownCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
  <li data-target="#clownCarousel" data-slide-to="0" class="active"></li>
  <li data-target="#clownCarousel" data-slide-to="1"></li>
  <li data-target="#clownCarousel" data-slide-to="2"></li>
  <li data-target="#clownCarousel" data-slide-to="3"></li>
</ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://i.imgur.com/PxCmZsS.jpg" alt="Circus Clowns">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.imgur.com/3GugodT.jpg" alt="Graduates">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://i.imgur.com/aKtSp8V.jpg" alt="Clown Professor">
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="https://i.imgur.com/OBMImeb.jpg" alt="Theatre Clowns">
  </div>
  </div>
  <a class="carousel-control-prev" href="#clownCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#clownCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<div class="homeContainer">
  <h3 class="homeH3 mt-2">Bozo University Admin Panel</h3>
  <div class="homeMessage">
  <p class="homeP">Welcome to the new admin dashboard for Bozo University. From the admin dashboard you can view and edit teachers, lessons, classes, students, and majors. Log in to access brand new CRUD features. The dashboard was built by Nutshell Chital.</p>
  </div>
  </div>`;
  utils.printToDom('#content', domString);
};

export default {
  buildHomeScreen,
};
