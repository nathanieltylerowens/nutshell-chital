import authData from '../../../helpers/data/authData';
import classData from '../../../helpers/data/classesData';
import utils from '../../../helpers/utils';
import './buildClasses.scss';

const buildRideModule = () => {
  let domString = '';
  classData.getClasses()
    .then((classes) => {
      domString += `
      <h2 class="homeH3 mt-2">Rides</h2>
      <div class=rideCreate>
      <div class="rideForm"></div>
      <div class="rideContainer mt-1">
      `;
      if (authData.isAuthenticated()) {
        domString += '<button class="btn btn-primary createRideBtn">Create A Ride<i class="fas fa-plus ml-1"></i></button>';
      } else {
        domString += '<button class="btn btn-primary createRideBtn hide">Create A Ride<i class="fas fa-plus ml-1"></i></button>';
      }
      domString += `
      </div>
      <div class="rideForm"></div>
      <div class="rideContainer mt-1">
      `;
      classes.forEach((singleClass) => {
        domString += `
        <div id=${singleClass.id} class="card rideCard" style="width: 18rem;">
        <img src="${singleClass.imageUrl}" class="card-img-top" alt="...">
        <div class="card-img-overlay">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="fas fa-times deleteRideIcon"></i>';
        } else {
          domString += '<i class="fas fa-times deleteRideIcon hide"></i>';
        }
        domString += `
        <div class="card-title rideTitle">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="far fa-edit rideEditBtn"></i>';
        } else {
          domString += '<i class="far fa-edit rideEditBtn hide"></i>';
        }
        domString += ` <h5>${singleClass.name}</h5>`;
        domString += `
        </div>
        </div>
       
        `;
      });
      domString += '</div>';
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('bork', err));
};

export default {
  buildRideModule,
};
