const lessonBuilder = (lesson) => {
  let domString = `
          <div class="card class-card" id="${lesson.id}">
            <div class="card-body">
              <h5>${lesson.name}</h5>
              <p>${lesson.hours}</p>
        `;

  if (lesson.materialsProvided === true) {
    domString += `
                <p>"YES"</p>
              `;
  } else {
    domString += `
                <p>"NO"</p>
          `;
  }

  domString += `
                <a href="#" id="edit-lesson-form"><i class="far fa-edit"></i></a>
                <a href="#" id="delete-lesson"><i class="far fa-times-circle"></i></a>
              </div>
            </div>
    `;
  return domString;
};

export default { lessonBuilder };
