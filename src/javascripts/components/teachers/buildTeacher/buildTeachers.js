const buildTeachers = (teacher) => {
  const domString = `
      <div class="card" style="width: 18rem;" id="${teacher.id}">
        <img src="${teacher.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h1 class="card-title">${teacher.name}</h1>
        <p class="card-text">${teacher.Tenured}</p>
      </div>
      <div class="modifyButtons">
      <a href="#"><i class="far fa-edit"></i></a>
      <a href="#"><i class="far fa-times-circle" id="delete-teacher"></i></a>
      </div>
      </div>
      `;
  return domString;
};

export default { buildTeachers };
