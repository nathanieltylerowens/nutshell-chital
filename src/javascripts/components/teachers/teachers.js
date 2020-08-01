import authData from '../../helpers/data/authData';

const TeacherCardMaker = (teacher) => {
  let domString = `
      <div class="teacher-card card" style="width: 18rem;" id=${teacher.id}>
        <img src="${teacher.imageUrl}" class="card-img-top teacher-image" alt="...">
        <div class="card-header text-center teacherName">${teacher.name}</div>
        <div class="card-body text-center">
          `;
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
    `;

  return domString;
};

export default { TeacherCardMaker };
