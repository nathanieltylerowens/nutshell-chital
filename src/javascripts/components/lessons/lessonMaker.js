import utils from '../../helpers/utils';

const lessonBuilder = (lesson) => {
  let domString = `
        <div class="card lessonsCard" style="width: 18rem;" id="${lesson.id}">
          <div class="card-body">
          <h5>${lesson.name}</h5>
          <p>${lesson.hours}</p>
        `;

  if (lesson.materialsProvided === true) {
    domString += `
              <p>"YES"<p>
            </div>
          </div>
          `;
  } else {
    domString += `
              <p>"NO"</p>
            </div>
          </div>
          `;
  }
  utils.printToDom('#lessons-container', domString);
};

export default { lessonBuilder };
