import utils from '../../../helpers/utils';
import authData from '../../../helpers/data/authData';

const getClasses = () => utils.readData('classes');

const buildClasses = () => {
  getClasses()
    .then((classes) => {
      let domString = '';
      classes.forEach((eachClass) => {
        domString += `
          <div class="card class-card" id="${eachClass.id}" style="width: 18rem;">
          <img src="${eachClass.imageUrl}" class="card-img-top class-card-img" alt="...">
          <div class="card-body">
            <h5 class="card-title">${eachClass.name}</h5>
            <p class="card-text">${eachClass.schedule}</p>
          </div>
          <div class="modifyButtons"></div>
          </div>
          `;
      });
      utils.printToDom('#cards-container', domString);
      authData.checkLoginStatus();
    })
    .catch((err) => console.error('error retrieving class list', err));
};

export default { buildClasses };
