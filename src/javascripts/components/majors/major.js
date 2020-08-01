import authData from '../../helpers/data/authData';
import './major.scss';

const majorCardMaker = (major) => {
  let domString = `
  <div class="col-3">
    <div class="card border-0 rounded-0 bg-light text-dark mb-3 major-card-shadow" id=${major.id}>
      <div class="card-header text-center">${major.name}</div>
      <div class="card-body text-center">`;
  if (authData.isAuthenticated()) {
    domString += '<button class="btn btn-primary info-major drop-shadow-1">Info</button>';
    domString += '<button class="btn btn-warning edit-major mx-1 drop-shadow-1">Edit</button>';
    domString += '<button class="btn btn-danger delete-major mx-1 drop-shadow-1">Delete</button>';
  } else {
    domString += '<button class="btn btn-primary info-major hide drop-shadow-1">Info</button>';
    domString += '<button class="btn btn-warning edit-major hide mx-1 drop-shadow-1">Edit</button>';
    domString += '<button class="btn btn-danger delete-major hide mx0 drop-shadow-1">Delete</button>';
  }

  domString += `
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default {
  majorCardMaker,
};
