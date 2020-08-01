import authData from '../../helpers/data/authData';
import './student.scss';

const studentCardMaker = (student) => {
  let domString = `
  <div class="col-3">
    <div class="card border-0 rounded-0 bg-light text-dark mb-3" id=${student.id}>
      <div class="card-header text-center">${student.studentName}</div>
      <img class="card-img-top student-card-image m-auto" src="${student.imageUrl}" alt="Student Image">
      <div class="card-body text-center">
        <h5 class="card-title">${student.major}</h5>`;
  if (authData.isAuthenticated()) {
    domString += '<button class="btn btn-warning edit-student mx-1 drop-shadow-1">Edit</button>';
  } else {
    domString += '<button class="btn btn-warning edit-student hide mx-1 drop-shadow-1">Edit</button>';
  }
  if (authData.isAuthenticated()) {
    domString += '<button class="btn btn-danger delete-student mx-1 drop-shadow-1">Delete</button>';
  } else {
    domString += '<button class="btn btn-danger delete-student hide mx-1 drop-shadow-1">Delete</button>';
  }

  domString += `
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default {
  studentCardMaker,
};
