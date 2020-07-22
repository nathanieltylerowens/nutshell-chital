import authData from '../../helpers/data/authData';

const TeacherCardMaker = (teacher) => {
  let domString = `
    <div class="col-3">
      <div class="teacher-card card border-0 rounded-1 bg-light text-dark mb-3" id=${teacher.id}>
        <img src="${teacher.imageUrl}" class="card-img-top" alt="...">
        <div class="card-header text-center">${teacher.name}</div>
        <div class="card-body text-center">
          <h5 class="card-title">This is a test</h5>`;
  if (authData.isAuthenticated()) {
    domString += `
    <button class="btn btn-warning edit-teacher">Edit</button>
    <button class="btn btn-danger delete-teacher">Delete</button>
    `;
  } else {
    domString += `
    <button class="btn btn-warning edit-teacher hide">Edit</button>
    <button class="btn btn-danger delete-teacher hide">Delete</button>
    `;
  }
  domString += `
        </div>
      </div>
    </div>
    `;

  return domString;
};

export default { TeacherCardMaker };
