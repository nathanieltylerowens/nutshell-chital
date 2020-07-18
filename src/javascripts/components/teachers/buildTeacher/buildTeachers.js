import utils from '../../../helpers/utils';

const getTeachers = () => utils.readData('teachers');

const buildTeachers = () => {
  getTeachers()
    .then((teachers) => {
      let domString = '';
      teachers.forEach((eachTeacher) => {
        domString += `
      <div class="card" style="width: 18rem;">
        <img src="${eachTeacher.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="card-title">${eachTeacher.name}</h1>
        <p class="card-text">${eachTeacher.Tenured}</p>
      </div>
      </div>
      `;
      });
      utils.printToDom('#cards-container', domString);
    })
    .catch((err) => console.error('error getting teachers', err));
};

export default { buildTeachers };
