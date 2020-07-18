import utils from '../../../helpers/utils';

const getStudents = () => utils.readData('students');

const buildAuthStudents = () => {
  getStudents()
    .then((students) => {
      let domString = '';
      students.forEach((eachStudent) => {
        domString += `
      <div class="card students-card" style="width: 18rem;">
        <img src="${eachStudent.imageUrl}" class="card-img-top students-card-img">
        <div class="card-body">
        <h2 class="card-title">${eachStudent.studentName}</h2>
        <h6 class="card-text">${eachStudent.major}</h6>

      </div>
      </div>
      `;
      });
      utils.printToDom('#students-container', domString);
    })
    .catch((err) => console.error('error getting students', err));
};

export default { buildAuthStudents };
