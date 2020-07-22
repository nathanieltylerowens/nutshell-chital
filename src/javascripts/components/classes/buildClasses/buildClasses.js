import authData from '../../../helpers/data/authData';
import classData from '../../../helpers/data/classesData';
import utils from '../../../helpers/utils';
import './buildClasses.scss';

const buildClassModule = () => {
  let domString = '';
  classData.getClasses()
    .then((classes) => {
      domString += `
      <h2 class="homeH3 mt-2">Classes</h2>
      <div class=classCreate>
      `;
      if (authData.isAuthenticated()) {
        domString += '<button class="btn btn-primary createClassBtn">Create A Class<i class="fas fa-plus ml-1"></i></button>';
      } else {
        domString += '<button class="btn btn-primary createClassBtn hide">Create A Class<i class="fas fa-plus ml-1"></i></button>';
      }
      domString += `
      </div>
      <div class="classForm"></div>
      <div class="classContainer mt-1">
      `;
      classes.forEach((singleClass) => {
        domString += `
        <div id=${singleClass.id} class="card classCard" style="width: 18rem;">
        <img src="${singleClass.imageUrl}" class="card-img-top" alt="...">
        <div class="card-img-overlay">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="fas fa-times deleteClassIcon"></i>';
        } else {
          domString += '<i class="fas fa-times deleteClassIcon hide"></i>';
        }
        domString += `
        </div>
        <div class="card-title classTitle">`;
        if (authData.isAuthenticated()) {
          domString += '<i class="far fa-edit classEditBtn"></i>';
        } else {
          domString += '<i class="far fa-edit classEditBtn hide"></i>';
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
  buildClassModule,
};
