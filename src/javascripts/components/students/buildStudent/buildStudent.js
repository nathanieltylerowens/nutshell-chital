import utils from '../../../helpers/utils';

const getStudents = () => utils.readData('students');

const buildStudents = () => {
  getStudents()
    .then((students) => {
      let domString = '';
      students.forEach((eachStudent) => {
        domString += `
      <div class="card" style="width: 18rem;">
        <img src="${eachStudent.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="card-title">${eachStudent.studentName}</h1>
        <p class="card-text">${eachStudent.major}</p>
      </div>
      </div>
      `;
      });
      utils.printToDom('#students-container', domString);
    })
    .catch((err) => console.error('error getting students', err));
};

export default { buildStudents };
