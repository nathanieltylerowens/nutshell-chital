import utils from '../../../helpers/utils';

const getClasses = () => utils.readData('classes');

const buildClasses = () => {
  getClasses()
    .then((classes) => {
      let domString = '';
      classes.forEach((eachClass) => {
        domString += `
          <div class="card" style="width: 18rem;">
  <img src="${eachClass.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="card-title">${eachClass.name}</h1>
    <p class="card-text">${eachClass.schedule}</p>
  </div>
</div>
`;
      });
      utils.printToDom('#classes-container', domString);
    })
    .catch((err) => console.error('error retrieving class list', err));
};

export default { buildClasses };
